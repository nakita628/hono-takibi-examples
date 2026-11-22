import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1EnvRoute,
  deleteV9ProjectsIdOrNameCustomEnvironmentsEnvironmentSlugOrIdRoute,
  getV1EnvIdRoute,
  getV1EnvRoute,
  getV9ProjectsIdOrNameCustomEnvironmentsEnvironmentSlugOrIdRoute,
  getV9ProjectsIdOrNameCustomEnvironmentsRoute,
  patchV1EnvIdUnlinkProjectIdRoute,
  patchV1EnvRoute,
  patchV9ProjectsIdOrNameCustomEnvironmentsEnvironmentSlugOrIdRoute,
  postV1EnvRoute,
  postV9ProjectsIdOrNameCustomEnvironmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const environmentHandler = app
  .openapi(postV1EnvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EnvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1EnvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1EnvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EnvIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1EnvIdUnlinkProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV9ProjectsIdOrNameCustomEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV9ProjectsIdOrNameCustomEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV9ProjectsIdOrNameCustomEnvironmentsEnvironmentSlugOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV9ProjectsIdOrNameCustomEnvironmentsEnvironmentSlugOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV9ProjectsIdOrNameCustomEnvironmentsEnvironmentSlugOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
