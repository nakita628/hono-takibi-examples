import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEmployerEmployerIdEffectiveDateRoute,
  deleteEmployerEmployerIdRevisionRevisionNumberRoute,
  deleteEmployerEmployerIdRoute,
  deleteEmployerEmployerIdSecretSecretIdRoute,
  getEmployerEmployerIdEffectiveDateRoute,
  getEmployerEmployerIdEffectiveDateSummaryRoute,
  getEmployerEmployerIdRevisionRevisionNumberRoute,
  getEmployerEmployerIdRevisionRevisionNumberSummaryRoute,
  getEmployerEmployerIdRevisionsRoute,
  getEmployerEmployerIdRevisionsSummaryRoute,
  getEmployerEmployerIdRoute,
  getEmployerEmployerIdSecretSecretIdRoute,
  getEmployerEmployerIdSecretsRoute,
  getEmployerEmployerIdSummaryRoute,
  getEmployersEffectiveDateRoute,
  getEmployersEffectiveDateSummaryRoute,
  getEmployersRoute,
  getEmployersSummaryRoute,
  patchEmployerEmployerIdRoute,
  postEmployerEmployerIdSecretsRoute,
  postEmployersRoute,
  putEmployerEmployerIdRoute,
  putEmployerEmployerIdSecretSecretIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const employerHandler = app
  .openapi(deleteEmployerEmployerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEmployerEmployerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdRevisionRevisionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdRevisionRevisionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdRevisionRevisionNumberSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdRevisionsSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdSecretSecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSecretSecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdSecretSecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployerEmployerIdSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEffectiveDateSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployersSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployersEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployersEffectiveDateSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
