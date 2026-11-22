import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdAiFinetunesFinetuneIdFinetuneAssetsFileNameRoute } from '../routes'

const app = new OpenAPIHono()

export const finetuneAssetHandler = app.openapi(
  getAccountsAccountIdAiFinetunesFinetuneIdFinetuneAssetsFileNameRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
