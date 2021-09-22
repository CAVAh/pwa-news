import { memo } from 'react';
import SharedIcon from '../../../images/share.svg';
import CopyIcon from '../../../images/copy.svg';

const navigatorHasShare = navigator.share;

const URL = 'http://localhost:3001';

const Action = ({ post, subject }) => {
  const { id, title } = post;

  const shareInfo = () => {
    navigator.share({
      title: `PWA News - ${subject}`,
      text: title,
      url: `${URL}/${subject}/${id}`,
    });
  };

  const copyInfo = () => {
    navigator.clipboard.writeText(`${title} - *Learn more about in* ${URL}/${subject}/${id}`).then(() => {
      console.log('Copiado com sucesso!');
    }, () => {
      console.log('Não foi possível copiar.');
    });
  };

  const renderActions = () => {
    const action = navigatorHasShare ? shareInfo : copyInfo;
    const icon = navigatorHasShare ? SharedIcon : CopyIcon;

    return (
      <img alt="icon" src={icon} className="share-icon" onClick={action} />
    );
  };

  return (
    <div className="share">
      {renderActions()}
    </div>
  );
};

export default memo(Action);
