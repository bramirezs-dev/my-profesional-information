
import dev from '@configs/dev'
import pro from '@configs/pro';

const environments = {
   dev, pro,
};

const index = (env: string | 'test' | 'dev' | 'pre' | 'pro'): () => any => {
  return environments[env] || (() => null);
};

export default index;
