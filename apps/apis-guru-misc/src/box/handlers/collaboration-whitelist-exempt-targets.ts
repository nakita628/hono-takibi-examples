import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetIdRoute,
  getCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetIdRoute,
  getCollaborationWhitelistExemptTargetsRoute,
  postCollaborationWhitelistExemptTargetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const collaborationWhitelistExemptTargetsHandler = app
  .openapi(getCollaborationWhitelistExemptTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollaborationWhitelistExemptTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
