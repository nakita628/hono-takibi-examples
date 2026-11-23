import { OpenAPIHono } from '@hono/zod-openapi'
import {
  patchExportEventIdRenameRoute,
  postExportCameraNameStartStartTimeEndEndTimeRoute,
  postExportCustomCameraNameStartStartTimeEndEndTimeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const exportHandler = app
  .openapi(postExportCameraNameStartStartTimeEndEndTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchExportEventIdRenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExportCustomCameraNameStartStartTimeEndEndTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
