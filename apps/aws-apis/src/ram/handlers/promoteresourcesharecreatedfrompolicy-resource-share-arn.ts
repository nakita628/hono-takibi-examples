import { OpenAPIHono } from '@hono/zod-openapi'
import { postPromoteresourcesharecreatedfrompolicyResourceShareArnRoute } from '../routes'

const app = new OpenAPIHono()

export const promoteresourcesharecreatedfrompolicyResourceShareArnHandler = app.openapi(
  postPromoteresourcesharecreatedfrompolicyResourceShareArnRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
