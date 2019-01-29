import { use } from '@rndm/render';
import methods from './methods';

const plugin = {
  key: 'uuid',
  methods,
};

use(plugin);

export default plugin;
