import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesNameRoute,
  deleteApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesRoute,
  deleteApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsNameRoute,
  deleteApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsRoute,
  deleteApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsNameRoute,
  deleteApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsRoute,
  deleteApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameRoute,
  deleteApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesRoute,
  deleteApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsNameRoute,
  deleteApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsRoute,
  deleteApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsNameRoute,
  deleteApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsRoute,
  getApisAdmissionregistrationK8sIoV1IndexRoute,
  getApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesNameRoute,
  getApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesRoute,
  getApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsNameRoute,
  getApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsRoute,
  getApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsNameRoute,
  getApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsRoute,
  getApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameRoute,
  getApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameStatusRoute,
  getApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesRoute,
  getApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsNameRoute,
  getApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsRoute,
  getApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsNameRoute,
  getApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsRoute,
  getApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpoliciesNameRoute,
  getApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpoliciesRoute,
  getApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpolicybindingsNameRoute,
  getApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpolicybindingsRoute,
  getApisAdmissionregistrationK8sIoV1WatchMutatingwebhookconfigurationsNameRoute,
  getApisAdmissionregistrationK8sIoV1WatchMutatingwebhookconfigurationsRoute,
  getApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpoliciesNameRoute,
  getApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpoliciesRoute,
  getApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpolicybindingsNameRoute,
  getApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpolicybindingsRoute,
  getApisAdmissionregistrationK8sIoV1WatchValidatingwebhookconfigurationsNameRoute,
  getApisAdmissionregistrationK8sIoV1WatchValidatingwebhookconfigurationsRoute,
  patchApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesNameRoute,
  patchApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsNameRoute,
  patchApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsNameRoute,
  patchApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameRoute,
  patchApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameStatusRoute,
  patchApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsNameRoute,
  patchApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsNameRoute,
  postApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesRoute,
  postApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsRoute,
  postApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsRoute,
  postApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesRoute,
  postApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsRoute,
  postApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsRoute,
  putApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesNameRoute,
  putApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsNameRoute,
  putApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsNameRoute,
  putApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameRoute,
  putApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameStatusRoute,
  putApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsNameRoute,
  putApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const admissionregistrationV1Handler = app
  .openapi(getApisAdmissionregistrationK8sIoV1IndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpoliciesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpolicybindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpolicybindingsNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApisAdmissionregistrationK8sIoV1WatchMutatingwebhookconfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAdmissionregistrationK8sIoV1WatchMutatingwebhookconfigurationsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpoliciesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpolicybindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpolicybindingsNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApisAdmissionregistrationK8sIoV1WatchValidatingwebhookconfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApisAdmissionregistrationK8sIoV1WatchValidatingwebhookconfigurationsNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
