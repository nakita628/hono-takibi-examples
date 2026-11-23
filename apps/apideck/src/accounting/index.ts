import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountingBillsIdRoute,
  deleteAccountingCreditNotesIdRoute,
  deleteAccountingCustomersIdRoute,
  deleteAccountingInvoiceItemsIdRoute,
  deleteAccountingInvoicesIdRoute,
  deleteAccountingJournalEntriesIdRoute,
  deleteAccountingLedgerAccountsIdRoute,
  deleteAccountingPaymentsIdRoute,
  deleteAccountingSuppliersIdRoute,
  deleteAccountingTaxRatesIdRoute,
  getAccountingBalanceSheetRoute,
  getAccountingBillsIdRoute,
  getAccountingBillsRoute,
  getAccountingCompanyInfoRoute,
  getAccountingCreditNotesIdRoute,
  getAccountingCreditNotesRoute,
  getAccountingCustomersIdRoute,
  getAccountingCustomersRoute,
  getAccountingInvoiceItemsIdRoute,
  getAccountingInvoiceItemsRoute,
  getAccountingInvoicesIdRoute,
  getAccountingInvoicesRoute,
  getAccountingJournalEntriesIdRoute,
  getAccountingJournalEntriesRoute,
  getAccountingLedgerAccountsIdRoute,
  getAccountingLedgerAccountsRoute,
  getAccountingPaymentsIdRoute,
  getAccountingPaymentsRoute,
  getAccountingProfitAndLossRoute,
  getAccountingSuppliersIdRoute,
  getAccountingSuppliersRoute,
  getAccountingTaxRatesIdRoute,
  getAccountingTaxRatesRoute,
  patchAccountingBillsIdRoute,
  patchAccountingCreditNotesIdRoute,
  patchAccountingCustomersIdRoute,
  patchAccountingInvoiceItemsIdRoute,
  patchAccountingInvoicesIdRoute,
  patchAccountingJournalEntriesIdRoute,
  patchAccountingLedgerAccountsIdRoute,
  patchAccountingPaymentsIdRoute,
  patchAccountingSuppliersIdRoute,
  patchAccountingTaxRatesIdRoute,
  postAccountingBillsRoute,
  postAccountingCreditNotesRoute,
  postAccountingCustomersRoute,
  postAccountingInvoiceItemsRoute,
  postAccountingInvoicesRoute,
  postAccountingJournalEntriesRoute,
  postAccountingLedgerAccountsRoute,
  postAccountingPaymentsRoute,
  postAccountingSuppliersRoute,
  postAccountingTaxRatesRoute,
} from './routes'
import {
  deleteAccountingBillsIdRouteHandler,
  deleteAccountingCreditNotesIdRouteHandler,
  deleteAccountingCustomersIdRouteHandler,
  deleteAccountingInvoiceItemsIdRouteHandler,
  deleteAccountingInvoicesIdRouteHandler,
  deleteAccountingJournalEntriesIdRouteHandler,
  deleteAccountingLedgerAccountsIdRouteHandler,
  deleteAccountingPaymentsIdRouteHandler,
  deleteAccountingSuppliersIdRouteHandler,
  deleteAccountingTaxRatesIdRouteHandler,
  getAccountingBalanceSheetRouteHandler,
  getAccountingBillsIdRouteHandler,
  getAccountingBillsRouteHandler,
  getAccountingCompanyInfoRouteHandler,
  getAccountingCreditNotesIdRouteHandler,
  getAccountingCreditNotesRouteHandler,
  getAccountingCustomersIdRouteHandler,
  getAccountingCustomersRouteHandler,
  getAccountingInvoiceItemsIdRouteHandler,
  getAccountingInvoiceItemsRouteHandler,
  getAccountingInvoicesIdRouteHandler,
  getAccountingInvoicesRouteHandler,
  getAccountingJournalEntriesIdRouteHandler,
  getAccountingJournalEntriesRouteHandler,
  getAccountingLedgerAccountsIdRouteHandler,
  getAccountingLedgerAccountsRouteHandler,
  getAccountingPaymentsIdRouteHandler,
  getAccountingPaymentsRouteHandler,
  getAccountingProfitAndLossRouteHandler,
  getAccountingSuppliersIdRouteHandler,
  getAccountingSuppliersRouteHandler,
  getAccountingTaxRatesIdRouteHandler,
  getAccountingTaxRatesRouteHandler,
  patchAccountingBillsIdRouteHandler,
  patchAccountingCreditNotesIdRouteHandler,
  patchAccountingCustomersIdRouteHandler,
  patchAccountingInvoiceItemsIdRouteHandler,
  patchAccountingInvoicesIdRouteHandler,
  patchAccountingJournalEntriesIdRouteHandler,
  patchAccountingLedgerAccountsIdRouteHandler,
  patchAccountingPaymentsIdRouteHandler,
  patchAccountingSuppliersIdRouteHandler,
  patchAccountingTaxRatesIdRouteHandler,
  postAccountingBillsRouteHandler,
  postAccountingCreditNotesRouteHandler,
  postAccountingCustomersRouteHandler,
  postAccountingInvoiceItemsRouteHandler,
  postAccountingInvoicesRouteHandler,
  postAccountingJournalEntriesRouteHandler,
  postAccountingLedgerAccountsRouteHandler,
  postAccountingPaymentsRouteHandler,
  postAccountingSuppliersRouteHandler,
  postAccountingTaxRatesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccountingBalanceSheetRoute, getAccountingBalanceSheetRouteHandler)
  .openapi(getAccountingBillsRoute, getAccountingBillsRouteHandler)
  .openapi(postAccountingBillsRoute, postAccountingBillsRouteHandler)
  .openapi(deleteAccountingBillsIdRoute, deleteAccountingBillsIdRouteHandler)
  .openapi(getAccountingBillsIdRoute, getAccountingBillsIdRouteHandler)
  .openapi(patchAccountingBillsIdRoute, patchAccountingBillsIdRouteHandler)
  .openapi(getAccountingCompanyInfoRoute, getAccountingCompanyInfoRouteHandler)
  .openapi(getAccountingCreditNotesRoute, getAccountingCreditNotesRouteHandler)
  .openapi(postAccountingCreditNotesRoute, postAccountingCreditNotesRouteHandler)
  .openapi(deleteAccountingCreditNotesIdRoute, deleteAccountingCreditNotesIdRouteHandler)
  .openapi(getAccountingCreditNotesIdRoute, getAccountingCreditNotesIdRouteHandler)
  .openapi(patchAccountingCreditNotesIdRoute, patchAccountingCreditNotesIdRouteHandler)
  .openapi(getAccountingCustomersRoute, getAccountingCustomersRouteHandler)
  .openapi(postAccountingCustomersRoute, postAccountingCustomersRouteHandler)
  .openapi(deleteAccountingCustomersIdRoute, deleteAccountingCustomersIdRouteHandler)
  .openapi(getAccountingCustomersIdRoute, getAccountingCustomersIdRouteHandler)
  .openapi(patchAccountingCustomersIdRoute, patchAccountingCustomersIdRouteHandler)
  .openapi(getAccountingInvoiceItemsRoute, getAccountingInvoiceItemsRouteHandler)
  .openapi(postAccountingInvoiceItemsRoute, postAccountingInvoiceItemsRouteHandler)
  .openapi(deleteAccountingInvoiceItemsIdRoute, deleteAccountingInvoiceItemsIdRouteHandler)
  .openapi(getAccountingInvoiceItemsIdRoute, getAccountingInvoiceItemsIdRouteHandler)
  .openapi(patchAccountingInvoiceItemsIdRoute, patchAccountingInvoiceItemsIdRouteHandler)
  .openapi(getAccountingInvoicesRoute, getAccountingInvoicesRouteHandler)
  .openapi(postAccountingInvoicesRoute, postAccountingInvoicesRouteHandler)
  .openapi(deleteAccountingInvoicesIdRoute, deleteAccountingInvoicesIdRouteHandler)
  .openapi(getAccountingInvoicesIdRoute, getAccountingInvoicesIdRouteHandler)
  .openapi(patchAccountingInvoicesIdRoute, patchAccountingInvoicesIdRouteHandler)
  .openapi(getAccountingJournalEntriesRoute, getAccountingJournalEntriesRouteHandler)
  .openapi(postAccountingJournalEntriesRoute, postAccountingJournalEntriesRouteHandler)
  .openapi(deleteAccountingJournalEntriesIdRoute, deleteAccountingJournalEntriesIdRouteHandler)
  .openapi(getAccountingJournalEntriesIdRoute, getAccountingJournalEntriesIdRouteHandler)
  .openapi(patchAccountingJournalEntriesIdRoute, patchAccountingJournalEntriesIdRouteHandler)
  .openapi(getAccountingLedgerAccountsRoute, getAccountingLedgerAccountsRouteHandler)
  .openapi(postAccountingLedgerAccountsRoute, postAccountingLedgerAccountsRouteHandler)
  .openapi(deleteAccountingLedgerAccountsIdRoute, deleteAccountingLedgerAccountsIdRouteHandler)
  .openapi(getAccountingLedgerAccountsIdRoute, getAccountingLedgerAccountsIdRouteHandler)
  .openapi(patchAccountingLedgerAccountsIdRoute, patchAccountingLedgerAccountsIdRouteHandler)
  .openapi(getAccountingPaymentsRoute, getAccountingPaymentsRouteHandler)
  .openapi(postAccountingPaymentsRoute, postAccountingPaymentsRouteHandler)
  .openapi(deleteAccountingPaymentsIdRoute, deleteAccountingPaymentsIdRouteHandler)
  .openapi(getAccountingPaymentsIdRoute, getAccountingPaymentsIdRouteHandler)
  .openapi(patchAccountingPaymentsIdRoute, patchAccountingPaymentsIdRouteHandler)
  .openapi(getAccountingProfitAndLossRoute, getAccountingProfitAndLossRouteHandler)
  .openapi(getAccountingSuppliersRoute, getAccountingSuppliersRouteHandler)
  .openapi(postAccountingSuppliersRoute, postAccountingSuppliersRouteHandler)
  .openapi(deleteAccountingSuppliersIdRoute, deleteAccountingSuppliersIdRouteHandler)
  .openapi(getAccountingSuppliersIdRoute, getAccountingSuppliersIdRouteHandler)
  .openapi(patchAccountingSuppliersIdRoute, patchAccountingSuppliersIdRouteHandler)
  .openapi(getAccountingTaxRatesRoute, getAccountingTaxRatesRouteHandler)
  .openapi(postAccountingTaxRatesRoute, postAccountingTaxRatesRouteHandler)
  .openapi(deleteAccountingTaxRatesIdRoute, deleteAccountingTaxRatesIdRouteHandler)
  .openapi(getAccountingTaxRatesIdRoute, getAccountingTaxRatesIdRouteHandler)
  .openapi(patchAccountingTaxRatesIdRoute, patchAccountingTaxRatesIdRouteHandler)

export default app
