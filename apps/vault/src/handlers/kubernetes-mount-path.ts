import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteKubernetesMountPathConfigRoute,
  deleteKubernetesMountPathRolesNameRoute,
  getKubernetesMountPathCheckRoute,
  getKubernetesMountPathConfigRoute,
  getKubernetesMountPathRolesIndexRoute,
  getKubernetesMountPathRolesNameRoute,
  postKubernetesMountPathConfigRoute,
  postKubernetesMountPathCredsNameRoute,
  postKubernetesMountPathRolesNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const kubernetesMountPathHandler = app
  .openapi(getKubernetesMountPathCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKubernetesMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKubernetesMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKubernetesMountPathCredsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesMountPathRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKubernetesMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKubernetesMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
