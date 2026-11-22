import { OpenAPIHono } from '@hono/zod-openapi'
import {
  get11WorkgroupsWorkgroupIdProjectsProjectIdFilesFileIdRoute,
  get11WorkgroupsWorkgroupIdProjectsProjectIdFilesRoute,
  get11WorkgroupsWorkgroupIdProjectsProjectIdFileTagsRoute,
  post11WorkgroupsWorkgroupIdProjectsProjectIdFilesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fileHandler = app
  .openapi(get11WorkgroupsWorkgroupIdProjectsProjectIdFileTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get11WorkgroupsWorkgroupIdProjectsProjectIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post11WorkgroupsWorkgroupIdProjectsProjectIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get11WorkgroupsWorkgroupIdProjectsProjectIdFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
