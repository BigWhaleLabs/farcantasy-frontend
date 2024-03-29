import { cleanEnv, str } from 'envalid'

export default cleanEnv(import.meta.env, {
  VITE_ETH_RPC: str(),
  VITE_CONTRACT: str(),
  VITE_ENVIRONMENT: str({ default: 'production' }),
})
