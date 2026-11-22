import { OpenAPIHono } from '@hono/zod-openapi'
import { postWalletobjectsV1PrivateContentUploadPrivateDataRoute } from '../routes'

const app = new OpenAPIHono()

export const walletobjectsHandler = app.openapi(
  postWalletobjectsV1PrivateContentUploadPrivateDataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
