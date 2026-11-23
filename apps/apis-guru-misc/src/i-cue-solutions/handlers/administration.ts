import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdministrationEntityIdRoute,
  deleteAdministrationPlanningLevelEntityIdIdRoute,
  deleteAdministrationUserEntityIdIdRoute,
  getAdministrationEntityRoute,
  getAdministrationModelEntityIdRoute,
  getAdministrationModelRoute,
  getAdministrationUserEntityIdRoute,
  postAdministrationEntityRoute,
  postAdministrationFileToJsonRoute,
  postAdministrationModelEntityIdRoute,
  postAdministrationModelRoute,
  postAdministrationPlanningLevelLockRoute,
  postAdministrationTokenRoute,
  postAdministrationUserRoute,
  putAdministrationEntityRoute,
  putAdministrationUserLockRoute,
  putAdministrationUserRoute,
} from '../routes'

const app = new OpenAPIHono()

export const administrationHandler = app
  .openapi(getAdministrationEntityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdministrationEntityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdministrationEntityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdministrationEntityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdministrationFileToJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdministrationModelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdministrationModelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdministrationModelEntityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdministrationModelEntityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdministrationPlanningLevelLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdministrationPlanningLevelEntityIdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdministrationTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdministrationUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdministrationUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdministrationUserLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdministrationUserEntityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdministrationUserEntityIdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
