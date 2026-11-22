import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEmployerEmployerIdPensionPensionIdEffectiveDateRoute,
  deleteEmployerEmployerIdPensionPensionIdRevisionRevisionNumberRoute,
  deleteEmployerEmployerIdPensionPensionIdRoute,
  getEmployerEmployerIdPensionPensionIdEffectiveDateRoute,
  getEmployerEmployerIdPensionPensionIdRevisionRevisionNumberRoute,
  getEmployerEmployerIdPensionPensionIdRevisionsRoute,
  getEmployerEmployerIdPensionPensionIdRoute,
  getEmployerEmployerIdPensionsEffectiveDateRoute,
  getEmployerEmployerIdPensionsRoute,
  patchEmployerEmployerIdPensionPensionIdRoute,
  postEmployerEmployerIdPensionsRoute,
  putEmployerEmployerIdPensionPensionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pensionHandler = app
  .openapi(deleteEmployerEmployerIdPensionPensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPensionPensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEmployerEmployerIdPensionPensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdPensionPensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdPensionPensionIdRevisionRevisionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPensionPensionIdRevisionRevisionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPensionPensionIdRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdPensionPensionIdEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPensionPensionIdEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployerEmployerIdPensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPensionsEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
