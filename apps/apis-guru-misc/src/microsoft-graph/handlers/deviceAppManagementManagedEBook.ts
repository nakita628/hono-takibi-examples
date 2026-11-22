import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceAppManagementManagedEBooksManagedEBookIdAssignmentsManagedEBookAssignmentIdRoute,
  deleteDeviceAppManagementManagedEBooksManagedEBookIdDeviceStatesDeviceInstallStateIdRoute,
  deleteDeviceAppManagementManagedEBooksManagedEBookIdInstallSummaryRoute,
  deleteDeviceAppManagementManagedEBooksManagedEBookIdRoute,
  deleteDeviceAppManagementManagedEBooksManagedEBookIdUserStateSummaryUserInstallStateSummaryIdDeviceStatesDeviceInstallStateIdRoute,
  deleteDeviceAppManagementManagedEBooksManagedEBookIdUserStateSummaryUserInstallStateSummaryIdRoute,
  getDeviceAppManagementManagedEBooksManagedEBookIdAssignmentsManagedEBookAssignmentIdRoute,
  getDeviceAppManagementManagedEBooksManagedEBookIdAssignmentsRoute,
  getDeviceAppManagementManagedEBooksManagedEBookIdDeviceStatesDeviceInstallStateIdRoute,
  getDeviceAppManagementManagedEBooksManagedEBookIdDeviceStatesRoute,
  getDeviceAppManagementManagedEBooksManagedEBookIdInstallSummaryRoute,
  getDeviceAppManagementManagedEBooksManagedEBookIdRoute,
  getDeviceAppManagementManagedEBooksManagedEBookIdUserStateSummaryRoute,
  getDeviceAppManagementManagedEBooksManagedEBookIdUserStateSummaryUserInstallStateSummaryIdDeviceStatesDeviceInstallStateIdRoute,
  getDeviceAppManagementManagedEBooksManagedEBookIdUserStateSummaryUserInstallStateSummaryIdDeviceStatesRoute,
  getDeviceAppManagementManagedEBooksManagedEBookIdUserStateSummaryUserInstallStateSummaryIdRoute,
  getDeviceAppManagementManagedEBooksRoute,
  patchDeviceAppManagementManagedEBooksManagedEBookIdAssignmentsManagedEBookAssignmentIdRoute,
  patchDeviceAppManagementManagedEBooksManagedEBookIdDeviceStatesDeviceInstallStateIdRoute,
  patchDeviceAppManagementManagedEBooksManagedEBookIdInstallSummaryRoute,
  patchDeviceAppManagementManagedEBooksManagedEBookIdRoute,
  patchDeviceAppManagementManagedEBooksManagedEBookIdUserStateSummaryUserInstallStateSummaryIdDeviceStatesDeviceInstallStateIdRoute,
  patchDeviceAppManagementManagedEBooksManagedEBookIdUserStateSummaryUserInstallStateSummaryIdRoute,
  postDeviceAppManagementManagedEBooksManagedEBookIdAssignmentsRoute,
  postDeviceAppManagementManagedEBooksManagedEBookIdDeviceStatesRoute,
  postDeviceAppManagementManagedEBooksManagedEBookIdUserStateSummaryRoute,
  postDeviceAppManagementManagedEBooksManagedEBookIdUserStateSummaryUserInstallStateSummaryIdDeviceStatesRoute,
  postDeviceAppManagementManagedEBooksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceAppManagementManagedEBookHandler = app
  .openapi(getDeviceAppManagementManagedEBooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceAppManagementManagedEBooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeviceAppManagementManagedEBooksManagedEBookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceAppManagementManagedEBooksManagedEBookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceAppManagementManagedEBooksManagedEBookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceAppManagementManagedEBooksManagedEBookIdAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceAppManagementManagedEBooksManagedEBookIdAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteDeviceAppManagementManagedEBooksManagedEBookIdAssignmentsManagedEBookAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementManagedEBooksManagedEBookIdAssignmentsManagedEBookAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceAppManagementManagedEBooksManagedEBookIdAssignmentsManagedEBookAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceAppManagementManagedEBooksManagedEBookIdDeviceStatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceAppManagementManagedEBooksManagedEBookIdDeviceStatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteDeviceAppManagementManagedEBooksManagedEBookIdDeviceStatesDeviceInstallStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementManagedEBooksManagedEBookIdDeviceStatesDeviceInstallStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceAppManagementManagedEBooksManagedEBookIdDeviceStatesDeviceInstallStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteDeviceAppManagementManagedEBooksManagedEBookIdInstallSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceAppManagementManagedEBooksManagedEBookIdInstallSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceAppManagementManagedEBooksManagedEBookIdInstallSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceAppManagementManagedEBooksManagedEBookIdUserStateSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceAppManagementManagedEBooksManagedEBookIdUserStateSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteDeviceAppManagementManagedEBooksManagedEBookIdUserStateSummaryUserInstallStateSummaryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementManagedEBooksManagedEBookIdUserStateSummaryUserInstallStateSummaryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceAppManagementManagedEBooksManagedEBookIdUserStateSummaryUserInstallStateSummaryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementManagedEBooksManagedEBookIdUserStateSummaryUserInstallStateSummaryIdDeviceStatesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceAppManagementManagedEBooksManagedEBookIdUserStateSummaryUserInstallStateSummaryIdDeviceStatesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceAppManagementManagedEBooksManagedEBookIdUserStateSummaryUserInstallStateSummaryIdDeviceStatesDeviceInstallStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementManagedEBooksManagedEBookIdUserStateSummaryUserInstallStateSummaryIdDeviceStatesDeviceInstallStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceAppManagementManagedEBooksManagedEBookIdUserStateSummaryUserInstallStateSummaryIdDeviceStatesDeviceInstallStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
