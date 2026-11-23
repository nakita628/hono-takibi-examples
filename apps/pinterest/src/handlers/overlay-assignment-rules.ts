import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOverlayAssignmentRulesIdRoute,
  getOverlayAssignmentRulesIdRoute,
  getOverlayAssignmentRulesRoute,
  patchOverlayAssignmentRulesIdRoute,
  postOverlayAssignmentRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const overlayAssignmentRulesHandler = app
  .openapi(getOverlayAssignmentRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOverlayAssignmentRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOverlayAssignmentRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOverlayAssignmentRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOverlayAssignmentRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
