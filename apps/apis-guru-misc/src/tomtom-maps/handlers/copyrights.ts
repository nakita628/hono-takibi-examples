import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMapVersionNumberCopyrightsCaptionFormatRoute,
  getMapVersionNumberCopyrightsFormatRoute,
  getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatRoute,
  getMapVersionNumberCopyrightsZoomXYFormatRoute,
} from '../routes'

const app = new OpenAPIHono()

export const copyrightsHandler = app
  .openapi(getMapVersionNumberCopyrightsFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMapVersionNumberCopyrightsCaptionFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMapVersionNumberCopyrightsZoomXYFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
