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
} from '../routes'

const app = new OpenAPIHono()

export const accountingHandler = app
  .openapi(getAccountingBalanceSheetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingBillsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountingBillsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountingBillsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingBillsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountingBillsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingCompanyInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingCreditNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountingCreditNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountingCreditNotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingCreditNotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountingCreditNotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountingCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountingCustomersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingCustomersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountingCustomersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingInvoiceItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountingInvoiceItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountingInvoiceItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingInvoiceItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountingInvoiceItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountingInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountingInvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingInvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountingInvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingJournalEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountingJournalEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountingJournalEntriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingJournalEntriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountingJournalEntriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingLedgerAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountingLedgerAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountingLedgerAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingLedgerAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountingLedgerAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountingPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountingPaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingPaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountingPaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingProfitAndLossRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingSuppliersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountingSuppliersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountingSuppliersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingSuppliersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountingSuppliersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingTaxRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountingTaxRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountingTaxRatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingTaxRatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountingTaxRatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
