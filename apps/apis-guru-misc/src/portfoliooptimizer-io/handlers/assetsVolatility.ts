import { OpenAPIHono } from '@hono/zod-openapi'
import { postAssetsVolatilityRoute } from '../routes'

const app = new OpenAPIHono()

export const assetsVolatilityHandler = app.openapi(postAssetsVolatilityRoute, (c) => {
  throw new Error('Not implemented')
})
