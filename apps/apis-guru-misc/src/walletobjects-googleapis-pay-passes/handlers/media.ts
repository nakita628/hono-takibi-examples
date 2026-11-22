import { OpenAPIHono } from '@hono/zod-openapi'
import { postWalletobjectsV1PrivateContentIssuerIdUploadPrivateImageRoute } from '../routes'

const app = new OpenAPIHono()

export const mediaHandler = app.openapi(
  postWalletobjectsV1PrivateContentIssuerIdUploadPrivateImageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
