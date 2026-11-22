import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSolutionsBookingBusinessesBookingBusinessIdAppointmentsBookingAppointmentIdRoute,
  deleteSolutionsBookingBusinessesBookingBusinessIdCalendarViewBookingAppointmentIdRoute,
  deleteSolutionsBookingBusinessesBookingBusinessIdCustomersBookingCustomerBaseIdRoute,
  deleteSolutionsBookingBusinessesBookingBusinessIdCustomQuestionsBookingCustomQuestionIdRoute,
  deleteSolutionsBookingBusinessesBookingBusinessIdRoute,
  deleteSolutionsBookingBusinessesBookingBusinessIdServicesBookingServiceIdRoute,
  deleteSolutionsBookingBusinessesBookingBusinessIdStaffMembersBookingStaffMemberBaseIdRoute,
  getSolutionsBookingBusinessesBookingBusinessIdAppointmentsBookingAppointmentIdRoute,
  getSolutionsBookingBusinessesBookingBusinessIdAppointmentsCountRoute,
  getSolutionsBookingBusinessesBookingBusinessIdAppointmentsRoute,
  getSolutionsBookingBusinessesBookingBusinessIdCalendarViewBookingAppointmentIdRoute,
  getSolutionsBookingBusinessesBookingBusinessIdCalendarViewCountRoute,
  getSolutionsBookingBusinessesBookingBusinessIdCalendarViewRoute,
  getSolutionsBookingBusinessesBookingBusinessIdCustomersBookingCustomerBaseIdRoute,
  getSolutionsBookingBusinessesBookingBusinessIdCustomersCountRoute,
  getSolutionsBookingBusinessesBookingBusinessIdCustomersRoute,
  getSolutionsBookingBusinessesBookingBusinessIdCustomQuestionsBookingCustomQuestionIdRoute,
  getSolutionsBookingBusinessesBookingBusinessIdCustomQuestionsCountRoute,
  getSolutionsBookingBusinessesBookingBusinessIdCustomQuestionsRoute,
  getSolutionsBookingBusinessesBookingBusinessIdRoute,
  getSolutionsBookingBusinessesBookingBusinessIdServicesBookingServiceIdRoute,
  getSolutionsBookingBusinessesBookingBusinessIdServicesCountRoute,
  getSolutionsBookingBusinessesBookingBusinessIdServicesRoute,
  getSolutionsBookingBusinessesBookingBusinessIdStaffMembersBookingStaffMemberBaseIdRoute,
  getSolutionsBookingBusinessesBookingBusinessIdStaffMembersCountRoute,
  getSolutionsBookingBusinessesBookingBusinessIdStaffMembersRoute,
  getSolutionsBookingBusinessesCountRoute,
  getSolutionsBookingBusinessesRoute,
  patchSolutionsBookingBusinessesBookingBusinessIdAppointmentsBookingAppointmentIdRoute,
  patchSolutionsBookingBusinessesBookingBusinessIdCalendarViewBookingAppointmentIdRoute,
  patchSolutionsBookingBusinessesBookingBusinessIdCustomersBookingCustomerBaseIdRoute,
  patchSolutionsBookingBusinessesBookingBusinessIdCustomQuestionsBookingCustomQuestionIdRoute,
  patchSolutionsBookingBusinessesBookingBusinessIdRoute,
  patchSolutionsBookingBusinessesBookingBusinessIdServicesBookingServiceIdRoute,
  patchSolutionsBookingBusinessesBookingBusinessIdStaffMembersBookingStaffMemberBaseIdRoute,
  postSolutionsBookingBusinessesBookingBusinessIdAppointmentsBookingAppointmentIdCancelRoute,
  postSolutionsBookingBusinessesBookingBusinessIdAppointmentsRoute,
  postSolutionsBookingBusinessesBookingBusinessIdCalendarViewBookingAppointmentIdCancelRoute,
  postSolutionsBookingBusinessesBookingBusinessIdCalendarViewRoute,
  postSolutionsBookingBusinessesBookingBusinessIdCustomersRoute,
  postSolutionsBookingBusinessesBookingBusinessIdCustomQuestionsRoute,
  postSolutionsBookingBusinessesBookingBusinessIdGetStaffAvailabilityRoute,
  postSolutionsBookingBusinessesBookingBusinessIdPublishRoute,
  postSolutionsBookingBusinessesBookingBusinessIdServicesRoute,
  postSolutionsBookingBusinessesBookingBusinessIdStaffMembersRoute,
  postSolutionsBookingBusinessesBookingBusinessIdUnpublishRoute,
  postSolutionsBookingBusinessesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const solutionsBookingBusinessHandler = app
  .openapi(getSolutionsBookingBusinessesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsBookingBusinessesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBookingBusinessesBookingBusinessIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSolutionsBookingBusinessesBookingBusinessIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSolutionsBookingBusinessesBookingBusinessIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBookingBusinessesBookingBusinessIdAppointmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsBookingBusinessesBookingBusinessIdAppointmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSolutionsBookingBusinessesBookingBusinessIdAppointmentsBookingAppointmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsBookingBusinessesBookingBusinessIdAppointmentsBookingAppointmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsBookingBusinessesBookingBusinessIdAppointmentsBookingAppointmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSolutionsBookingBusinessesBookingBusinessIdAppointmentsBookingAppointmentIdCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSolutionsBookingBusinessesBookingBusinessIdAppointmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBookingBusinessesBookingBusinessIdCalendarViewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsBookingBusinessesBookingBusinessIdCalendarViewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSolutionsBookingBusinessesBookingBusinessIdCalendarViewBookingAppointmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsBookingBusinessesBookingBusinessIdCalendarViewBookingAppointmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsBookingBusinessesBookingBusinessIdCalendarViewBookingAppointmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSolutionsBookingBusinessesBookingBusinessIdCalendarViewBookingAppointmentIdCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSolutionsBookingBusinessesBookingBusinessIdCalendarViewCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBookingBusinessesBookingBusinessIdCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsBookingBusinessesBookingBusinessIdCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSolutionsBookingBusinessesBookingBusinessIdCustomersBookingCustomerBaseIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsBookingBusinessesBookingBusinessIdCustomersBookingCustomerBaseIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsBookingBusinessesBookingBusinessIdCustomersBookingCustomerBaseIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSolutionsBookingBusinessesBookingBusinessIdCustomersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBookingBusinessesBookingBusinessIdCustomQuestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsBookingBusinessesBookingBusinessIdCustomQuestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSolutionsBookingBusinessesBookingBusinessIdCustomQuestionsBookingCustomQuestionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsBookingBusinessesBookingBusinessIdCustomQuestionsBookingCustomQuestionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsBookingBusinessesBookingBusinessIdCustomQuestionsBookingCustomQuestionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSolutionsBookingBusinessesBookingBusinessIdCustomQuestionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsBookingBusinessesBookingBusinessIdGetStaffAvailabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsBookingBusinessesBookingBusinessIdPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsBookingBusinessesBookingBusinessIdUnpublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBookingBusinessesBookingBusinessIdServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsBookingBusinessesBookingBusinessIdServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBookingBusinessesBookingBusinessIdServicesBookingServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSolutionsBookingBusinessesBookingBusinessIdServicesBookingServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSolutionsBookingBusinessesBookingBusinessIdServicesBookingServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBookingBusinessesBookingBusinessIdServicesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBookingBusinessesBookingBusinessIdStaffMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsBookingBusinessesBookingBusinessIdStaffMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSolutionsBookingBusinessesBookingBusinessIdStaffMembersBookingStaffMemberBaseIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsBookingBusinessesBookingBusinessIdStaffMembersBookingStaffMemberBaseIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsBookingBusinessesBookingBusinessIdStaffMembersBookingStaffMemberBaseIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSolutionsBookingBusinessesBookingBusinessIdStaffMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBookingBusinessesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
