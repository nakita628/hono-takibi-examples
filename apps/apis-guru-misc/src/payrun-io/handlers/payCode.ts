import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEmployerEmployerIdPayCodePayCodeIdEffectiveDateRoute,
  deleteEmployerEmployerIdPayCodePayCodeIdRevisionRevisionNumberRoute,
  deleteEmployerEmployerIdPayCodePayCodeIdRoute,
  getEmployerEmployerIdNominalCodeNominalCodeIdPayCodesRoute,
  getEmployerEmployerIdPayCodePayCodeIdEffectiveDateRoute,
  getEmployerEmployerIdPayCodePayCodeIdRevisionRevisionNumberRoute,
  getEmployerEmployerIdPayCodePayCodeIdRevisionsRoute,
  getEmployerEmployerIdPayCodePayCodeIdRoute,
  getEmployerEmployerIdPayCodesEffectiveDateRoute,
  getEmployerEmployerIdPayCodesRoute,
  patchEmployerEmployerIdPayCodePayCodeIdRoute,
  postEmployerEmployerIdPayCodesRoute,
  putEmployerEmployerIdPayCodePayCodeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const payCodeHandler = app
  .openapi(getEmployerEmployerIdNominalCodeNominalCodeIdPayCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdPayCodePayCodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPayCodePayCodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEmployerEmployerIdPayCodePayCodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdPayCodePayCodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdPayCodePayCodeIdRevisionRevisionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPayCodePayCodeIdRevisionRevisionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPayCodePayCodeIdRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdPayCodePayCodeIdEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPayCodePayCodeIdEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPayCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployerEmployerIdPayCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPayCodesEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
