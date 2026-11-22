import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWWorkspaceCaptureIdRoute,
  getWWorkspaceCaptureGetConfigsRunnableKindPathRoute,
  getWWorkspaceCaptureIdRoute,
  getWWorkspaceCaptureListRunnableKindPathRoute,
  postWWorkspaceCaptureMoveRunnableKindPathRoute,
  postWWorkspaceCapturePingConfigTriggerKindRunnableKindPathRoute,
  postWWorkspaceCaptureSetConfigRoute,
} from '../routes'

const app = new OpenAPIHono()

export const captureHandler = app
  .openapi(postWWorkspaceCaptureSetConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceCapturePingConfigTriggerKindRunnableKindPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceCaptureGetConfigsRunnableKindPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceCaptureListRunnableKindPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceCaptureMoveRunnableKindPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceCaptureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceCaptureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
