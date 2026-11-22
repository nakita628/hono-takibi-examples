import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectProjectServiceServiceNameMirrormakerReplicationFlowsSourceClusterTargetClusterRoute,
  getProjectProjectServiceServiceNameMirrormakerReplicationFlowsRoute,
  getProjectProjectServiceServiceNameMirrormakerReplicationFlowsSourceClusterTargetClusterRoute,
  postProjectProjectServiceServiceNameMirrormakerReplicationFlowsRoute,
  putProjectProjectServiceServiceNameMirrormakerReplicationFlowsSourceClusterTargetClusterRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serviceKafkaMirrorMakerHandler = app
  .openapi(postProjectProjectServiceServiceNameMirrormakerReplicationFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameMirrormakerReplicationFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteProjectProjectServiceServiceNameMirrormakerReplicationFlowsSourceClusterTargetClusterRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProjectProjectServiceServiceNameMirrormakerReplicationFlowsSourceClusterTargetClusterRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putProjectProjectServiceServiceNameMirrormakerReplicationFlowsSourceClusterTargetClusterRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
