import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePostgresPostgresIdCredentialsUsernameRoute,
  deletePostgresPostgresIdRoute,
  getPostgresPostgresIdConnectionInfoRoute,
  getPostgresPostgresIdCredentialsRoute,
  getPostgresPostgresIdExportRoute,
  getPostgresPostgresIdQueryProcessesRoute,
  getPostgresPostgresIdQuerySizesRoute,
  getPostgresPostgresIdQueryTableScansRoute,
  getPostgresPostgresIdQueryTopQueriesRoute,
  getPostgresPostgresIdRecoveryRoute,
  getPostgresPostgresIdRoute,
  getPostgresRoute,
  patchPostgresPostgresIdRoute,
  postPostgresPostgresIdCredentialsRoute,
  postPostgresPostgresIdExportRoute,
  postPostgresPostgresIdFailoverRoute,
  postPostgresPostgresIdRecoveryRoute,
  postPostgresPostgresIdRestartRoute,
  postPostgresPostgresIdResumeRoute,
  postPostgresPostgresIdSuspendRoute,
  postPostgresRoute,
} from '../routes'

const app = new OpenAPIHono()

export const postgresHandler = app
  .openapi(getPostgresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPostgresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPostgresPostgresIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPostgresPostgresIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePostgresPostgresIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPostgresPostgresIdConnectionInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPostgresPostgresIdRecoveryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPostgresPostgresIdRecoveryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPostgresPostgresIdSuspendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPostgresPostgresIdResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPostgresPostgresIdRestartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPostgresPostgresIdFailoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPostgresPostgresIdExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPostgresPostgresIdExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPostgresPostgresIdCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPostgresPostgresIdCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePostgresPostgresIdCredentialsUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPostgresPostgresIdQueryProcessesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPostgresPostgresIdQueryTopQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPostgresPostgresIdQuerySizesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPostgresPostgresIdQueryTableScansRoute, (c) => {
    throw new Error('Not implemented')
  })
