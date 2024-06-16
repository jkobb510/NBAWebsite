import PlayerInfo from "./Atoms/PlayerInfo"


const CardInfo = () => {
  const renderCardInfo = () => {
    return (
      <PlayerInfo
        classname="playerInfo"
        team="Los Angeles Lakers"
        years="1996 - 2016"
      />
    );
  };
    return (
    <div className="card-info">
      {renderCardInfo()}
    </div>
    );
  };

export default CardInfo;

