import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEducationSchoolsEducationSchoolIdClassesEducationClassIdRefRoute,
  deleteEducationSchoolsEducationSchoolIdRoute,
  deleteEducationSchoolsEducationSchoolIdUsersEducationUserIdRefRoute,
  getEducationSchoolsEducationSchoolIdAdministrativeUnitRoute,
  getEducationSchoolsEducationSchoolIdClassesRefRoute,
  getEducationSchoolsEducationSchoolIdClassesRoute,
  getEducationSchoolsEducationSchoolIdRoute,
  getEducationSchoolsEducationSchoolIdUsersRefRoute,
  getEducationSchoolsEducationSchoolIdUsersRoute,
  getEducationSchoolsRoute,
  patchEducationSchoolsEducationSchoolIdAdministrativeUnitRoute,
  patchEducationSchoolsEducationSchoolIdRoute,
  postEducationSchoolsEducationSchoolIdClassesRefRoute,
  postEducationSchoolsEducationSchoolIdUsersRefRoute,
  postEducationSchoolsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const educationEducationSchoolHandler = app
  .openapi(getEducationSchoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationSchoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEducationSchoolsEducationSchoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationSchoolsEducationSchoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEducationSchoolsEducationSchoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationSchoolsEducationSchoolIdAdministrativeUnitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEducationSchoolsEducationSchoolIdAdministrativeUnitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationSchoolsEducationSchoolIdClassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationSchoolsEducationSchoolIdClassesRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationSchoolsEducationSchoolIdClassesRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEducationSchoolsEducationSchoolIdClassesEducationClassIdRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationSchoolsEducationSchoolIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationSchoolsEducationSchoolIdUsersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationSchoolsEducationSchoolIdUsersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEducationSchoolsEducationSchoolIdUsersEducationUserIdRefRoute, (c) => {
    throw new Error('Not implemented')
  })
