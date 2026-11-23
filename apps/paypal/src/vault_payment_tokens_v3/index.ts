import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV3VaultPaymentTokensIdRoute,
  getV3VaultPaymentTokensIdRoute,
  getV3VaultPaymentTokensRoute,
  getV3VaultSetupTokensIdRoute,
  postV3VaultPaymentTokensRoute,
  postV3VaultSetupTokensRoute,
} from './routes'
import {
  deleteV3VaultPaymentTokensIdRouteHandler,
  getV3VaultPaymentTokensIdRouteHandler,
  getV3VaultPaymentTokensRouteHandler,
  getV3VaultSetupTokensIdRouteHandler,
  postV3VaultPaymentTokensRouteHandler,
  postV3VaultSetupTokensRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV3VaultPaymentTokensRoute, postV3VaultPaymentTokensRouteHandler)
  .openapi(getV3VaultPaymentTokensRoute, getV3VaultPaymentTokensRouteHandler)
  .openapi(getV3VaultPaymentTokensIdRoute, getV3VaultPaymentTokensIdRouteHandler)
  .openapi(deleteV3VaultPaymentTokensIdRoute, deleteV3VaultPaymentTokensIdRouteHandler)
  .openapi(postV3VaultSetupTokensRoute, postV3VaultSetupTokensRouteHandler)
  .openapi(getV3VaultSetupTokensIdRoute, getV3VaultSetupTokensIdRouteHandler)

export default app
