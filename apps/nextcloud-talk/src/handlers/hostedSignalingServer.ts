import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsSpreedApiApiVersionHostedsignalingserverDeleteRoute,
  postOcsV2PhpAppsSpreedApiApiVersionHostedsignalingserverRequesttrialRoute,
} from '../routes'

const app = new OpenAPIHono()

export const hostedSignalingServerHandler = app
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionHostedsignalingserverRequesttrialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionHostedsignalingserverDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
