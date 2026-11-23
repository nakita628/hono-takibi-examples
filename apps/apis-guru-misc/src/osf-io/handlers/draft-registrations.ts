import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDraftRegistrationsDraftIdIndexRoute,
  getDraftRegistrationsDraftIdContributorsIndexRoute,
  getDraftRegistrationsDraftIdContributorsUserIdIndexRoute,
  getDraftRegistrationsDraftIdIndexRoute,
  getDraftRegistrationsDraftIdInstitutionsIndexRoute,
  getDraftRegistrationsDraftIdSubjectsIndexRoute,
  getDraftRegistrationsIndexRoute,
  patchDraftRegistrationsDraftIdIndexRoute,
  postDraftRegistrationsDraftIdContributorsIndexRoute,
  postDraftRegistrationsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const draftRegistrationsHandler = app
  .openapi(getDraftRegistrationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDraftRegistrationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDraftRegistrationsDraftIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDraftRegistrationsDraftIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDraftRegistrationsDraftIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDraftRegistrationsDraftIdContributorsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDraftRegistrationsDraftIdContributorsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDraftRegistrationsDraftIdContributorsUserIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDraftRegistrationsDraftIdInstitutionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDraftRegistrationsDraftIdSubjectsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
