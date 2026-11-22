import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSecurityAttackSimulationEndUserNotificationsEndUserNotificationIdDetailsEndUserNotificationDetailIdRoute,
  deleteSecurityAttackSimulationEndUserNotificationsEndUserNotificationIdRoute,
  deleteSecurityAttackSimulationLandingPagesLandingPageIdDetailsLandingPageDetailIdRoute,
  deleteSecurityAttackSimulationLandingPagesLandingPageIdRoute,
  deleteSecurityAttackSimulationLoginPagesLoginPageIdRoute,
  deleteSecurityAttackSimulationOperationsAttackSimulationOperationIdRoute,
  deleteSecurityAttackSimulationPayloadsPayloadIdRoute,
  deleteSecurityAttackSimulationRoute,
  deleteSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRoute,
  deleteSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRunsSimulationAutomationRunIdRoute,
  deleteSecurityAttackSimulationSimulationsSimulationIdRoute,
  deleteSecurityAttackSimulationTrainingsTrainingIdLanguageDetailsTrainingLanguageDetailIdRoute,
  deleteSecurityAttackSimulationTrainingsTrainingIdRoute,
  getSecurityAttackSimulationEndUserNotificationsCountRoute,
  getSecurityAttackSimulationEndUserNotificationsEndUserNotificationIdDetailsCountRoute,
  getSecurityAttackSimulationEndUserNotificationsEndUserNotificationIdDetailsEndUserNotificationDetailIdRoute,
  getSecurityAttackSimulationEndUserNotificationsEndUserNotificationIdDetailsRoute,
  getSecurityAttackSimulationEndUserNotificationsEndUserNotificationIdRoute,
  getSecurityAttackSimulationEndUserNotificationsRoute,
  getSecurityAttackSimulationLandingPagesCountRoute,
  getSecurityAttackSimulationLandingPagesLandingPageIdDetailsCountRoute,
  getSecurityAttackSimulationLandingPagesLandingPageIdDetailsLandingPageDetailIdRoute,
  getSecurityAttackSimulationLandingPagesLandingPageIdDetailsRoute,
  getSecurityAttackSimulationLandingPagesLandingPageIdRoute,
  getSecurityAttackSimulationLandingPagesRoute,
  getSecurityAttackSimulationLoginPagesCountRoute,
  getSecurityAttackSimulationLoginPagesLoginPageIdRoute,
  getSecurityAttackSimulationLoginPagesRoute,
  getSecurityAttackSimulationOperationsAttackSimulationOperationIdRoute,
  getSecurityAttackSimulationOperationsCountRoute,
  getSecurityAttackSimulationOperationsRoute,
  getSecurityAttackSimulationPayloadsCountRoute,
  getSecurityAttackSimulationPayloadsPayloadIdRoute,
  getSecurityAttackSimulationPayloadsRoute,
  getSecurityAttackSimulationRoute,
  getSecurityAttackSimulationSimulationAutomationsCountRoute,
  getSecurityAttackSimulationSimulationAutomationsRoute,
  getSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRoute,
  getSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRunsCountRoute,
  getSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRunsRoute,
  getSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRunsSimulationAutomationRunIdRoute,
  getSecurityAttackSimulationSimulationsCountRoute,
  getSecurityAttackSimulationSimulationsRoute,
  getSecurityAttackSimulationSimulationsSimulationIdLandingPageRoute,
  getSecurityAttackSimulationSimulationsSimulationIdLoginPageRoute,
  getSecurityAttackSimulationSimulationsSimulationIdPayloadRoute,
  getSecurityAttackSimulationSimulationsSimulationIdRoute,
  getSecurityAttackSimulationTrainingsCountRoute,
  getSecurityAttackSimulationTrainingsRoute,
  getSecurityAttackSimulationTrainingsTrainingIdLanguageDetailsCountRoute,
  getSecurityAttackSimulationTrainingsTrainingIdLanguageDetailsRoute,
  getSecurityAttackSimulationTrainingsTrainingIdLanguageDetailsTrainingLanguageDetailIdRoute,
  getSecurityAttackSimulationTrainingsTrainingIdRoute,
  patchSecurityAttackSimulationEndUserNotificationsEndUserNotificationIdDetailsEndUserNotificationDetailIdRoute,
  patchSecurityAttackSimulationEndUserNotificationsEndUserNotificationIdRoute,
  patchSecurityAttackSimulationLandingPagesLandingPageIdDetailsLandingPageDetailIdRoute,
  patchSecurityAttackSimulationLandingPagesLandingPageIdRoute,
  patchSecurityAttackSimulationLoginPagesLoginPageIdRoute,
  patchSecurityAttackSimulationOperationsAttackSimulationOperationIdRoute,
  patchSecurityAttackSimulationPayloadsPayloadIdRoute,
  patchSecurityAttackSimulationRoute,
  patchSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRoute,
  patchSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRunsSimulationAutomationRunIdRoute,
  patchSecurityAttackSimulationSimulationsSimulationIdRoute,
  patchSecurityAttackSimulationTrainingsTrainingIdLanguageDetailsTrainingLanguageDetailIdRoute,
  patchSecurityAttackSimulationTrainingsTrainingIdRoute,
  postSecurityAttackSimulationEndUserNotificationsEndUserNotificationIdDetailsRoute,
  postSecurityAttackSimulationEndUserNotificationsRoute,
  postSecurityAttackSimulationLandingPagesLandingPageIdDetailsRoute,
  postSecurityAttackSimulationLandingPagesRoute,
  postSecurityAttackSimulationLoginPagesRoute,
  postSecurityAttackSimulationOperationsRoute,
  postSecurityAttackSimulationPayloadsRoute,
  postSecurityAttackSimulationSimulationAutomationsRoute,
  postSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRunsRoute,
  postSecurityAttackSimulationSimulationsRoute,
  postSecurityAttackSimulationTrainingsRoute,
  postSecurityAttackSimulationTrainingsTrainingIdLanguageDetailsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const securityAttackSimulationRootHandler = app
  .openapi(getSecurityAttackSimulationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityAttackSimulationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityAttackSimulationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAttackSimulationEndUserNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityAttackSimulationEndUserNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAttackSimulationEndUserNotificationsEndUserNotificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityAttackSimulationEndUserNotificationsEndUserNotificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityAttackSimulationEndUserNotificationsEndUserNotificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSecurityAttackSimulationEndUserNotificationsEndUserNotificationIdDetailsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSecurityAttackSimulationEndUserNotificationsEndUserNotificationIdDetailsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityAttackSimulationEndUserNotificationsEndUserNotificationIdDetailsEndUserNotificationDetailIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSecurityAttackSimulationEndUserNotificationsEndUserNotificationIdDetailsEndUserNotificationDetailIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSecurityAttackSimulationEndUserNotificationsEndUserNotificationIdDetailsEndUserNotificationDetailIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityAttackSimulationEndUserNotificationsEndUserNotificationIdDetailsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSecurityAttackSimulationEndUserNotificationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAttackSimulationLandingPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityAttackSimulationLandingPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAttackSimulationLandingPagesLandingPageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityAttackSimulationLandingPagesLandingPageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityAttackSimulationLandingPagesLandingPageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAttackSimulationLandingPagesLandingPageIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityAttackSimulationLandingPagesLandingPageIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSecurityAttackSimulationLandingPagesLandingPageIdDetailsLandingPageDetailIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSecurityAttackSimulationLandingPagesLandingPageIdDetailsLandingPageDetailIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSecurityAttackSimulationLandingPagesLandingPageIdDetailsLandingPageDetailIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSecurityAttackSimulationLandingPagesLandingPageIdDetailsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAttackSimulationLandingPagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAttackSimulationLoginPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityAttackSimulationLoginPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAttackSimulationLoginPagesLoginPageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityAttackSimulationLoginPagesLoginPageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityAttackSimulationLoginPagesLoginPageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAttackSimulationLoginPagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAttackSimulationOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityAttackSimulationOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAttackSimulationOperationsAttackSimulationOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityAttackSimulationOperationsAttackSimulationOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityAttackSimulationOperationsAttackSimulationOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAttackSimulationOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAttackSimulationPayloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityAttackSimulationPayloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAttackSimulationPayloadsPayloadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityAttackSimulationPayloadsPayloadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityAttackSimulationPayloadsPayloadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAttackSimulationPayloadsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAttackSimulationSimulationAutomationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityAttackSimulationSimulationAutomationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRunsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRunsSimulationAutomationRunIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRunsSimulationAutomationRunIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRunsSimulationAutomationRunIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRunsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSecurityAttackSimulationSimulationAutomationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAttackSimulationSimulationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityAttackSimulationSimulationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAttackSimulationSimulationsSimulationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityAttackSimulationSimulationsSimulationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityAttackSimulationSimulationsSimulationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAttackSimulationSimulationsSimulationIdLandingPageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAttackSimulationSimulationsSimulationIdLoginPageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAttackSimulationSimulationsSimulationIdPayloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAttackSimulationSimulationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAttackSimulationTrainingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityAttackSimulationTrainingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAttackSimulationTrainingsTrainingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityAttackSimulationTrainingsTrainingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityAttackSimulationTrainingsTrainingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAttackSimulationTrainingsTrainingIdLanguageDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityAttackSimulationTrainingsTrainingIdLanguageDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSecurityAttackSimulationTrainingsTrainingIdLanguageDetailsTrainingLanguageDetailIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSecurityAttackSimulationTrainingsTrainingIdLanguageDetailsTrainingLanguageDetailIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSecurityAttackSimulationTrainingsTrainingIdLanguageDetailsTrainingLanguageDetailIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSecurityAttackSimulationTrainingsTrainingIdLanguageDetailsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAttackSimulationTrainingsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
