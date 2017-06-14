import AppStore from './app';
import GameStore from './game';
import LobbyStore from './lobby';
import UserStore from './user';

export default function (services) {
  const user = new UserStore(services);
  const game = new GameStore(services);
  const lobby = new LobbyStore(services);
  const app = new AppStore(services);

  return {
    user, game, lobby, app
  };
}
