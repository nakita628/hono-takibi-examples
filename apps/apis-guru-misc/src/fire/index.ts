import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1BatchesBatchUuidBanktransfersItemUuidRoute,
  deleteV1BatchesBatchUuidInternaltransfersItemUuidRoute,
  deleteV1BatchesBatchUuidRoute,
  getV1AccountsIcanRoute,
  getV1AccountsIcanTransactionsFilterRoute,
  getV1AccountsIcanTransactionsRoute,
  getV1AccountsRoute,
  getV1AspspsRoute,
  getV1BatchesBatchUuidApprovalsRoute,
  getV1BatchesBatchUuidBanktransfersRoute,
  getV1BatchesBatchUuidInternaltransfersRoute,
  getV1BatchesBatchUuidRoute,
  getV1BatchesRoute,
  getV1CardsCardIdTransactionsRoute,
  getV1CardsRoute,
  getV1DirectdebitsDirectDebitUuidRoute,
  getV1DirectdebitsRoute,
  getV1MandatesMandateUuidRoute,
  getV1MandatesRoute,
  getV1PayeesRoute,
  getV1PaymentsPaymentUuidRoute,
  getV1UsersRoute,
  getV1UserUserIdRoute,
  getV3AccountsIcanTransactionsRoute,
  postV1AccountsRoute,
  postV1AppsAccesstokensRoute,
  postV1AppsRoute,
  postV1BatchesBatchUuidBanktransfersRoute,
  postV1BatchesBatchUuidInternaltransfersRoute,
  postV1BatchesRoute,
  postV1CardsCardIdBlockRoute,
  postV1CardsCardIdUnblockRoute,
  postV1CardsRoute,
  postV1DirectdebitsDirectDebitUuidRejectRoute,
  postV1MandatesMandateUuidActivateRoute,
  postV1MandatesMandateUuidCancelRoute,
  postV1MandatesMandateUuidRoute,
  postV1PaymentrequestsRoute,
  putV1BatchesBatchUuidRoute,
} from './routes'
import {
  deleteV1BatchesBatchUuidBanktransfersItemUuidRouteHandler,
  deleteV1BatchesBatchUuidInternaltransfersItemUuidRouteHandler,
  deleteV1BatchesBatchUuidRouteHandler,
  getV1AccountsIcanRouteHandler,
  getV1AccountsIcanTransactionsFilterRouteHandler,
  getV1AccountsIcanTransactionsRouteHandler,
  getV1AccountsRouteHandler,
  getV1AspspsRouteHandler,
  getV1BatchesBatchUuidApprovalsRouteHandler,
  getV1BatchesBatchUuidBanktransfersRouteHandler,
  getV1BatchesBatchUuidInternaltransfersRouteHandler,
  getV1BatchesBatchUuidRouteHandler,
  getV1BatchesRouteHandler,
  getV1CardsCardIdTransactionsRouteHandler,
  getV1CardsRouteHandler,
  getV1DirectdebitsDirectDebitUuidRouteHandler,
  getV1DirectdebitsRouteHandler,
  getV1MandatesMandateUuidRouteHandler,
  getV1MandatesRouteHandler,
  getV1PayeesRouteHandler,
  getV1PaymentsPaymentUuidRouteHandler,
  getV1UsersRouteHandler,
  getV1UserUserIdRouteHandler,
  getV3AccountsIcanTransactionsRouteHandler,
  postV1AccountsRouteHandler,
  postV1AppsAccesstokensRouteHandler,
  postV1AppsRouteHandler,
  postV1BatchesBatchUuidBanktransfersRouteHandler,
  postV1BatchesBatchUuidInternaltransfersRouteHandler,
  postV1BatchesRouteHandler,
  postV1CardsCardIdBlockRouteHandler,
  postV1CardsCardIdUnblockRouteHandler,
  postV1CardsRouteHandler,
  postV1DirectdebitsDirectDebitUuidRejectRouteHandler,
  postV1MandatesMandateUuidActivateRouteHandler,
  postV1MandatesMandateUuidCancelRouteHandler,
  postV1MandatesMandateUuidRouteHandler,
  postV1PaymentrequestsRouteHandler,
  putV1BatchesBatchUuidRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1AccountsRoute, getV1AccountsRouteHandler)
  .openapi(postV1AccountsRoute, postV1AccountsRouteHandler)
  .openapi(getV1AccountsIcanRoute, getV1AccountsIcanRouteHandler)
  .openapi(getV1AccountsIcanTransactionsRoute, getV1AccountsIcanTransactionsRouteHandler)
  .openapi(
    getV1AccountsIcanTransactionsFilterRoute,
    getV1AccountsIcanTransactionsFilterRouteHandler,
  )
  .openapi(postV1AppsRoute, postV1AppsRouteHandler)
  .openapi(postV1AppsAccesstokensRoute, postV1AppsAccesstokensRouteHandler)
  .openapi(getV1AspspsRoute, getV1AspspsRouteHandler)
  .openapi(getV1BatchesRoute, getV1BatchesRouteHandler)
  .openapi(postV1BatchesRoute, postV1BatchesRouteHandler)
  .openapi(deleteV1BatchesBatchUuidRoute, deleteV1BatchesBatchUuidRouteHandler)
  .openapi(getV1BatchesBatchUuidRoute, getV1BatchesBatchUuidRouteHandler)
  .openapi(putV1BatchesBatchUuidRoute, putV1BatchesBatchUuidRouteHandler)
  .openapi(getV1BatchesBatchUuidApprovalsRoute, getV1BatchesBatchUuidApprovalsRouteHandler)
  .openapi(getV1BatchesBatchUuidBanktransfersRoute, getV1BatchesBatchUuidBanktransfersRouteHandler)
  .openapi(
    postV1BatchesBatchUuidBanktransfersRoute,
    postV1BatchesBatchUuidBanktransfersRouteHandler,
  )
  .openapi(
    deleteV1BatchesBatchUuidBanktransfersItemUuidRoute,
    deleteV1BatchesBatchUuidBanktransfersItemUuidRouteHandler,
  )
  .openapi(
    getV1BatchesBatchUuidInternaltransfersRoute,
    getV1BatchesBatchUuidInternaltransfersRouteHandler,
  )
  .openapi(
    postV1BatchesBatchUuidInternaltransfersRoute,
    postV1BatchesBatchUuidInternaltransfersRouteHandler,
  )
  .openapi(
    deleteV1BatchesBatchUuidInternaltransfersItemUuidRoute,
    deleteV1BatchesBatchUuidInternaltransfersItemUuidRouteHandler,
  )
  .openapi(getV1CardsRoute, getV1CardsRouteHandler)
  .openapi(postV1CardsRoute, postV1CardsRouteHandler)
  .openapi(postV1CardsCardIdBlockRoute, postV1CardsCardIdBlockRouteHandler)
  .openapi(getV1CardsCardIdTransactionsRoute, getV1CardsCardIdTransactionsRouteHandler)
  .openapi(postV1CardsCardIdUnblockRoute, postV1CardsCardIdUnblockRouteHandler)
  .openapi(getV1DirectdebitsRoute, getV1DirectdebitsRouteHandler)
  .openapi(getV1DirectdebitsDirectDebitUuidRoute, getV1DirectdebitsDirectDebitUuidRouteHandler)
  .openapi(
    postV1DirectdebitsDirectDebitUuidRejectRoute,
    postV1DirectdebitsDirectDebitUuidRejectRouteHandler,
  )
  .openapi(getV1MandatesRoute, getV1MandatesRouteHandler)
  .openapi(getV1MandatesMandateUuidRoute, getV1MandatesMandateUuidRouteHandler)
  .openapi(postV1MandatesMandateUuidRoute, postV1MandatesMandateUuidRouteHandler)
  .openapi(postV1MandatesMandateUuidActivateRoute, postV1MandatesMandateUuidActivateRouteHandler)
  .openapi(postV1MandatesMandateUuidCancelRoute, postV1MandatesMandateUuidCancelRouteHandler)
  .openapi(getV1PayeesRoute, getV1PayeesRouteHandler)
  .openapi(postV1PaymentrequestsRoute, postV1PaymentrequestsRouteHandler)
  .openapi(getV1PaymentsPaymentUuidRoute, getV1PaymentsPaymentUuidRouteHandler)
  .openapi(getV1UserUserIdRoute, getV1UserUserIdRouteHandler)
  .openapi(getV1UsersRoute, getV1UsersRouteHandler)
  .openapi(getV3AccountsIcanTransactionsRoute, getV3AccountsIcanTransactionsRouteHandler)

export default app
