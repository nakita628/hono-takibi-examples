import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessSearchAddressBooksRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessSearchAddressBooksHandler = app.openapi(
  postXAmzTargetAlexaForBusinessSearchAddressBooksRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
