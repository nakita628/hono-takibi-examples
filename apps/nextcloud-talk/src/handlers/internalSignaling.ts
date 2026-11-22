import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOcsV2PhpAppsSpreedApiApiVersionSignalingSettingsRoute,
  getOcsV2PhpAppsSpreedApiApiVersionSignalingTokenRoute,
  postOcsV2PhpAppsSpreedApiApiVersionSignalingTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const internalSignalingHandler = app
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionSignalingSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionSignalingTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionSignalingTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
