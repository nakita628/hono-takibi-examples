import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccounts(
  args: InferRequestType<typeof client.Accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Accounts.$get(args, options))
}

export async function putAccounts(
  args: InferRequestType<typeof client.Accounts.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Accounts.$put(args, options))
}

export async function getAccountsAccountID(
  args: InferRequestType<(typeof client.Accounts)[':AccountID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Accounts[':AccountID'].$get(args, options))
}

export async function postAccountsAccountID(
  args: InferRequestType<(typeof client.Accounts)[':AccountID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Accounts[':AccountID'].$post(args, options))
}

export async function deleteAccountsAccountID(
  args: InferRequestType<(typeof client.Accounts)[':AccountID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Accounts[':AccountID'].$delete(args, options))
}

export async function getAccountsAccountIDAttachments(
  args: InferRequestType<(typeof client.Accounts)[':AccountID']['Attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Accounts[':AccountID'].Attachments.$get(args, options))
}

export async function getAccountsAccountIDAttachmentsAttachmentID(
  args: InferRequestType<
    (typeof client.Accounts)[':AccountID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Accounts[':AccountID'].Attachments[':AttachmentID'].$get(args, options),
  )
}

export async function getAccountsAccountIDAttachmentsFileName(
  args: InferRequestType<
    (typeof client.Accounts)[':AccountID']['Attachments'][':FileName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Accounts[':AccountID'].Attachments[':FileName'].$get(args, options),
  )
}

export async function putAccountsAccountIDAttachmentsFileName(
  args: InferRequestType<
    (typeof client.Accounts)[':AccountID']['Attachments'][':FileName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Accounts[':AccountID'].Attachments[':FileName'].$put(args, options),
  )
}

export async function postAccountsAccountIDAttachmentsFileName(
  args: InferRequestType<
    (typeof client.Accounts)[':AccountID']['Attachments'][':FileName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Accounts[':AccountID'].Attachments[':FileName'].$post(args, options),
  )
}

export async function getBatchPayments(
  args: InferRequestType<typeof client.BatchPayments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.BatchPayments.$get(args, options))
}

export async function putBatchPayments(
  args: InferRequestType<typeof client.BatchPayments.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.BatchPayments.$put(args, options))
}

export async function postBatchPayments(
  args: InferRequestType<typeof client.BatchPayments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.BatchPayments.$post(args, options))
}

export async function getBatchPaymentsBatchPaymentID(
  args: InferRequestType<(typeof client.BatchPayments)[':BatchPaymentID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.BatchPayments[':BatchPaymentID'].$get(args, options))
}

export async function postBatchPaymentsBatchPaymentID(
  args: InferRequestType<(typeof client.BatchPayments)[':BatchPaymentID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.BatchPayments[':BatchPaymentID'].$post(args, options))
}

export async function getBatchPaymentsBatchPaymentIDHistory(
  args: InferRequestType<(typeof client.BatchPayments)[':BatchPaymentID']['History']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.BatchPayments[':BatchPaymentID'].History.$get(args, options))
}

export async function putBatchPaymentsBatchPaymentIDHistory(
  args: InferRequestType<(typeof client.BatchPayments)[':BatchPaymentID']['History']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.BatchPayments[':BatchPaymentID'].History.$put(args, options))
}

export async function getBankTransactions(
  args: InferRequestType<typeof client.BankTransactions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.BankTransactions.$get(args, options))
}

export async function putBankTransactions(
  args: InferRequestType<typeof client.BankTransactions.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.BankTransactions.$put(args, options))
}

export async function postBankTransactions(
  args: InferRequestType<typeof client.BankTransactions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.BankTransactions.$post(args, options))
}

export async function getBankTransactionsBankTransactionID(
  args: InferRequestType<(typeof client.BankTransactions)[':BankTransactionID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.BankTransactions[':BankTransactionID'].$get(args, options))
}

export async function postBankTransactionsBankTransactionID(
  args: InferRequestType<(typeof client.BankTransactions)[':BankTransactionID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.BankTransactions[':BankTransactionID'].$post(args, options))
}

export async function getBankTransactionsBankTransactionIDAttachments(
  args: InferRequestType<
    (typeof client.BankTransactions)[':BankTransactionID']['Attachments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.BankTransactions[':BankTransactionID'].Attachments.$get(args, options),
  )
}

export async function getBankTransactionsBankTransactionIDAttachmentsAttachmentID(
  args: InferRequestType<
    (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.BankTransactions[':BankTransactionID'].Attachments[':AttachmentID'].$get(args, options),
  )
}

export async function getBankTransactionsBankTransactionIDAttachmentsFileName(
  args: InferRequestType<
    (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':FileName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.BankTransactions[':BankTransactionID'].Attachments[':FileName'].$get(args, options),
  )
}

export async function putBankTransactionsBankTransactionIDAttachmentsFileName(
  args: InferRequestType<
    (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':FileName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.BankTransactions[':BankTransactionID'].Attachments[':FileName'].$put(args, options),
  )
}

export async function postBankTransactionsBankTransactionIDAttachmentsFileName(
  args: InferRequestType<
    (typeof client.BankTransactions)[':BankTransactionID']['Attachments'][':FileName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.BankTransactions[':BankTransactionID'].Attachments[':FileName'].$post(args, options),
  )
}

export async function getBankTransactionsBankTransactionIDHistory(
  args: InferRequestType<(typeof client.BankTransactions)[':BankTransactionID']['History']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.BankTransactions[':BankTransactionID'].History.$get(args, options),
  )
}

export async function putBankTransactionsBankTransactionIDHistory(
  args: InferRequestType<(typeof client.BankTransactions)[':BankTransactionID']['History']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.BankTransactions[':BankTransactionID'].History.$put(args, options),
  )
}

export async function getBankTransfers(
  args: InferRequestType<typeof client.BankTransfers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.BankTransfers.$get(args, options))
}

export async function putBankTransfers(
  args: InferRequestType<typeof client.BankTransfers.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.BankTransfers.$put(args, options))
}

export async function postBankTransfers(
  args: InferRequestType<typeof client.BankTransfers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.BankTransfers.$post(args, options))
}

export async function getBankTransfersBankTransferID(
  args: InferRequestType<(typeof client.BankTransfers)[':BankTransferID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.BankTransfers[':BankTransferID'].$get(args, options))
}

export async function postBankTransfersBankTransferID(
  args: InferRequestType<(typeof client.BankTransfers)[':BankTransferID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.BankTransfers[':BankTransferID'].$post(args, options))
}

export async function getBankTransfersBankTransferIDAttachments(
  args: InferRequestType<(typeof client.BankTransfers)[':BankTransferID']['Attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.BankTransfers[':BankTransferID'].Attachments.$get(args, options),
  )
}

export async function getBankTransfersBankTransferIDAttachmentsAttachmentID(
  args: InferRequestType<
    (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.BankTransfers[':BankTransferID'].Attachments[':AttachmentID'].$get(args, options),
  )
}

export async function getBankTransfersBankTransferIDAttachmentsFileName(
  args: InferRequestType<
    (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':FileName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.BankTransfers[':BankTransferID'].Attachments[':FileName'].$get(args, options),
  )
}

export async function putBankTransfersBankTransferIDAttachmentsFileName(
  args: InferRequestType<
    (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':FileName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.BankTransfers[':BankTransferID'].Attachments[':FileName'].$put(args, options),
  )
}

export async function postBankTransfersBankTransferIDAttachmentsFileName(
  args: InferRequestType<
    (typeof client.BankTransfers)[':BankTransferID']['Attachments'][':FileName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.BankTransfers[':BankTransferID'].Attachments[':FileName'].$post(args, options),
  )
}

export async function getBankTransfersBankTransferIDHistory(
  args: InferRequestType<(typeof client.BankTransfers)[':BankTransferID']['History']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.BankTransfers[':BankTransferID'].History.$get(args, options))
}

export async function putBankTransfersBankTransferIDHistory(
  args: InferRequestType<(typeof client.BankTransfers)[':BankTransferID']['History']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.BankTransfers[':BankTransferID'].History.$put(args, options))
}

export async function getBrandingThemes(
  args: InferRequestType<typeof client.BrandingThemes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.BrandingThemes.$get(args, options))
}

export async function getBrandingThemesBrandingThemeID(
  args: InferRequestType<(typeof client.BrandingThemes)[':BrandingThemeID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.BrandingThemes[':BrandingThemeID'].$get(args, options))
}

export async function getBrandingThemesBrandingThemeIDPaymentServices(
  args: InferRequestType<
    (typeof client.BrandingThemes)[':BrandingThemeID']['PaymentServices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.BrandingThemes[':BrandingThemeID'].PaymentServices.$get(args, options),
  )
}

export async function postBrandingThemesBrandingThemeIDPaymentServices(
  args: InferRequestType<
    (typeof client.BrandingThemes)[':BrandingThemeID']['PaymentServices']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.BrandingThemes[':BrandingThemeID'].PaymentServices.$post(args, options),
  )
}

export async function getBudgets(
  args: InferRequestType<typeof client.Budgets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Budgets.$get(args, options))
}

export async function getBudgetsBudgetID(
  args: InferRequestType<(typeof client.Budgets)[':BudgetID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Budgets[':BudgetID'].$get(args, options))
}

export async function getContacts(
  args: InferRequestType<typeof client.Contacts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Contacts.$get(args, options))
}

export async function putContacts(
  args: InferRequestType<typeof client.Contacts.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Contacts.$put(args, options))
}

export async function postContacts(
  args: InferRequestType<typeof client.Contacts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Contacts.$post(args, options))
}

export async function getContactsContactNumber(
  args: InferRequestType<(typeof client.Contacts)[':ContactNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Contacts[':ContactNumber'].$get(args, options))
}

export async function getContactsContactID(
  args: InferRequestType<(typeof client.Contacts)[':ContactID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Contacts[':ContactID'].$get(args, options))
}

export async function postContactsContactID(
  args: InferRequestType<(typeof client.Contacts)[':ContactID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Contacts[':ContactID'].$post(args, options))
}

export async function getContactsContactIDAttachments(
  args: InferRequestType<(typeof client.Contacts)[':ContactID']['Attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Contacts[':ContactID'].Attachments.$get(args, options))
}

export async function getContactsContactIDAttachmentsAttachmentID(
  args: InferRequestType<
    (typeof client.Contacts)[':ContactID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Contacts[':ContactID'].Attachments[':AttachmentID'].$get(args, options),
  )
}

export async function getContactsContactIDAttachmentsFileName(
  args: InferRequestType<
    (typeof client.Contacts)[':ContactID']['Attachments'][':FileName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Contacts[':ContactID'].Attachments[':FileName'].$get(args, options),
  )
}

export async function putContactsContactIDAttachmentsFileName(
  args: InferRequestType<
    (typeof client.Contacts)[':ContactID']['Attachments'][':FileName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Contacts[':ContactID'].Attachments[':FileName'].$put(args, options),
  )
}

export async function postContactsContactIDAttachmentsFileName(
  args: InferRequestType<
    (typeof client.Contacts)[':ContactID']['Attachments'][':FileName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Contacts[':ContactID'].Attachments[':FileName'].$post(args, options),
  )
}

export async function getContactsContactIDCISSettings(
  args: InferRequestType<(typeof client.Contacts)[':ContactID']['CISSettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Contacts[':ContactID'].CISSettings.$get(args, options))
}

export async function getContactsContactIDHistory(
  args: InferRequestType<(typeof client.Contacts)[':ContactID']['History']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Contacts[':ContactID'].History.$get(args, options))
}

export async function putContactsContactIDHistory(
  args: InferRequestType<(typeof client.Contacts)[':ContactID']['History']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Contacts[':ContactID'].History.$put(args, options))
}

export async function getContactGroups(
  args: InferRequestType<typeof client.ContactGroups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ContactGroups.$get(args, options))
}

export async function putContactGroups(
  args: InferRequestType<typeof client.ContactGroups.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ContactGroups.$put(args, options))
}

export async function getContactGroupsContactGroupID(
  args: InferRequestType<(typeof client.ContactGroups)[':ContactGroupID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ContactGroups[':ContactGroupID'].$get(args, options))
}

export async function postContactGroupsContactGroupID(
  args: InferRequestType<(typeof client.ContactGroups)[':ContactGroupID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ContactGroups[':ContactGroupID'].$post(args, options))
}

export async function putContactGroupsContactGroupIDContacts(
  args: InferRequestType<(typeof client.ContactGroups)[':ContactGroupID']['Contacts']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ContactGroups[':ContactGroupID'].Contacts.$put(args, options))
}

export async function deleteContactGroupsContactGroupIDContacts(
  args: InferRequestType<(typeof client.ContactGroups)[':ContactGroupID']['Contacts']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ContactGroups[':ContactGroupID'].Contacts.$delete(args, options),
  )
}

export async function deleteContactGroupsContactGroupIDContactsContactID(
  args: InferRequestType<
    (typeof client.ContactGroups)[':ContactGroupID']['Contacts'][':ContactID']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ContactGroups[':ContactGroupID'].Contacts[':ContactID'].$delete(args, options),
  )
}

export async function getCreditNotes(
  args: InferRequestType<typeof client.CreditNotes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CreditNotes.$get(args, options))
}

export async function putCreditNotes(
  args: InferRequestType<typeof client.CreditNotes.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CreditNotes.$put(args, options))
}

export async function postCreditNotes(
  args: InferRequestType<typeof client.CreditNotes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CreditNotes.$post(args, options))
}

export async function getCreditNotesCreditNoteID(
  args: InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CreditNotes[':CreditNoteID'].$get(args, options))
}

export async function postCreditNotesCreditNoteID(
  args: InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CreditNotes[':CreditNoteID'].$post(args, options))
}

export async function getCreditNotesCreditNoteIDAttachments(
  args: InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['Attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CreditNotes[':CreditNoteID'].Attachments.$get(args, options))
}

export async function getCreditNotesCreditNoteIDAttachmentsAttachmentID(
  args: InferRequestType<
    (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.CreditNotes[':CreditNoteID'].Attachments[':AttachmentID'].$get(args, options),
  )
}

export async function getCreditNotesCreditNoteIDAttachmentsFileName(
  args: InferRequestType<
    (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':FileName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.CreditNotes[':CreditNoteID'].Attachments[':FileName'].$get(args, options),
  )
}

export async function putCreditNotesCreditNoteIDAttachmentsFileName(
  args: InferRequestType<
    (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':FileName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.CreditNotes[':CreditNoteID'].Attachments[':FileName'].$put(args, options),
  )
}

export async function postCreditNotesCreditNoteIDAttachmentsFileName(
  args: InferRequestType<
    (typeof client.CreditNotes)[':CreditNoteID']['Attachments'][':FileName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.CreditNotes[':CreditNoteID'].Attachments[':FileName'].$post(args, options),
  )
}

export async function getCreditNotesCreditNoteIDPdf(
  args: InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['pdf']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CreditNotes[':CreditNoteID'].pdf.$get(args, options))
}

export async function putCreditNotesCreditNoteIDAllocations(
  args: InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['Allocations']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CreditNotes[':CreditNoteID'].Allocations.$put(args, options))
}

export async function deleteCreditNotesCreditNoteIDAllocationsAllocationID(
  args: InferRequestType<
    (typeof client.CreditNotes)[':CreditNoteID']['Allocations'][':AllocationID']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.CreditNotes[':CreditNoteID'].Allocations[':AllocationID'].$delete(args, options),
  )
}

export async function getCreditNotesCreditNoteIDHistory(
  args: InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['History']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CreditNotes[':CreditNoteID'].History.$get(args, options))
}

export async function putCreditNotesCreditNoteIDHistory(
  args: InferRequestType<(typeof client.CreditNotes)[':CreditNoteID']['History']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CreditNotes[':CreditNoteID'].History.$put(args, options))
}

export async function getCurrencies(
  args: InferRequestType<typeof client.Currencies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Currencies.$get(args, options))
}

export async function putCurrencies(
  args: InferRequestType<typeof client.Currencies.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Currencies.$put(args, options))
}

export async function getExpenseClaims(
  args: InferRequestType<typeof client.ExpenseClaims.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ExpenseClaims.$get(args, options))
}

export async function putExpenseClaims(
  args: InferRequestType<typeof client.ExpenseClaims.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ExpenseClaims.$put(args, options))
}

export async function getExpenseClaimsExpenseClaimID(
  args: InferRequestType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ExpenseClaims[':ExpenseClaimID'].$get(args, options))
}

export async function postExpenseClaimsExpenseClaimID(
  args: InferRequestType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ExpenseClaims[':ExpenseClaimID'].$post(args, options))
}

export async function getExpenseClaimsExpenseClaimIDHistory(
  args: InferRequestType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['History']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ExpenseClaims[':ExpenseClaimID'].History.$get(args, options))
}

export async function putExpenseClaimsExpenseClaimIDHistory(
  args: InferRequestType<(typeof client.ExpenseClaims)[':ExpenseClaimID']['History']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ExpenseClaims[':ExpenseClaimID'].History.$put(args, options))
}

export async function getInvoices(
  args: InferRequestType<typeof client.Invoices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Invoices.$get(args, options))
}

export async function putInvoices(
  args: InferRequestType<typeof client.Invoices.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Invoices.$put(args, options))
}

export async function postInvoices(
  args: InferRequestType<typeof client.Invoices.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Invoices.$post(args, options))
}

export async function getInvoicesInvoiceID(
  args: InferRequestType<(typeof client.Invoices)[':InvoiceID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Invoices[':InvoiceID'].$get(args, options))
}

export async function postInvoicesInvoiceID(
  args: InferRequestType<(typeof client.Invoices)[':InvoiceID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Invoices[':InvoiceID'].$post(args, options))
}

export async function getInvoicesInvoiceIDPdf(
  args: InferRequestType<(typeof client.Invoices)[':InvoiceID']['pdf']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Invoices[':InvoiceID'].pdf.$get(args, options))
}

export async function getInvoicesInvoiceIDAttachments(
  args: InferRequestType<(typeof client.Invoices)[':InvoiceID']['Attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Invoices[':InvoiceID'].Attachments.$get(args, options))
}

export async function getInvoicesInvoiceIDAttachmentsAttachmentID(
  args: InferRequestType<
    (typeof client.Invoices)[':InvoiceID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Invoices[':InvoiceID'].Attachments[':AttachmentID'].$get(args, options),
  )
}

export async function getInvoicesInvoiceIDAttachmentsFileName(
  args: InferRequestType<
    (typeof client.Invoices)[':InvoiceID']['Attachments'][':FileName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Invoices[':InvoiceID'].Attachments[':FileName'].$get(args, options),
  )
}

export async function putInvoicesInvoiceIDAttachmentsFileName(
  args: InferRequestType<
    (typeof client.Invoices)[':InvoiceID']['Attachments'][':FileName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Invoices[':InvoiceID'].Attachments[':FileName'].$put(args, options),
  )
}

export async function postInvoicesInvoiceIDAttachmentsFileName(
  args: InferRequestType<
    (typeof client.Invoices)[':InvoiceID']['Attachments'][':FileName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Invoices[':InvoiceID'].Attachments[':FileName'].$post(args, options),
  )
}

export async function getInvoicesInvoiceIDOnlineInvoice(
  args: InferRequestType<(typeof client.Invoices)[':InvoiceID']['OnlineInvoice']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Invoices[':InvoiceID'].OnlineInvoice.$get(args, options))
}

export async function postInvoicesInvoiceIDEmail(
  args: InferRequestType<(typeof client.Invoices)[':InvoiceID']['Email']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Invoices[':InvoiceID'].Email.$post(args, options))
}

export async function getInvoicesInvoiceIDHistory(
  args: InferRequestType<(typeof client.Invoices)[':InvoiceID']['History']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Invoices[':InvoiceID'].History.$get(args, options))
}

export async function putInvoicesInvoiceIDHistory(
  args: InferRequestType<(typeof client.Invoices)[':InvoiceID']['History']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Invoices[':InvoiceID'].History.$put(args, options))
}

export async function getInvoiceRemindersSettings(
  args: InferRequestType<typeof client.InvoiceReminders.Settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.InvoiceReminders.Settings.$get(args, options))
}

export async function getItems(
  args: InferRequestType<typeof client.Items.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items.$get(args, options))
}

export async function putItems(
  args: InferRequestType<typeof client.Items.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items.$put(args, options))
}

export async function postItems(
  args: InferRequestType<typeof client.Items.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items.$post(args, options))
}

export async function getItemsItemID(
  args: InferRequestType<(typeof client.Items)[':ItemID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items[':ItemID'].$get(args, options))
}

export async function postItemsItemID(
  args: InferRequestType<(typeof client.Items)[':ItemID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items[':ItemID'].$post(args, options))
}

export async function deleteItemsItemID(
  args: InferRequestType<(typeof client.Items)[':ItemID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items[':ItemID'].$delete(args, options))
}

export async function getItemsItemIDHistory(
  args: InferRequestType<(typeof client.Items)[':ItemID']['History']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items[':ItemID'].History.$get(args, options))
}

export async function putItemsItemIDHistory(
  args: InferRequestType<(typeof client.Items)[':ItemID']['History']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Items[':ItemID'].History.$put(args, options))
}

export async function getJournals(
  args: InferRequestType<typeof client.Journals.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Journals.$get(args, options))
}

export async function getJournalsJournalID(
  args: InferRequestType<(typeof client.Journals)[':JournalID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Journals[':JournalID'].$get(args, options))
}

export async function getJournalsJournalNumber(
  args: InferRequestType<(typeof client.Journals)[':JournalNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Journals[':JournalNumber'].$get(args, options))
}

export async function getLinkedTransactions(
  args: InferRequestType<typeof client.LinkedTransactions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LinkedTransactions.$get(args, options))
}

export async function putLinkedTransactions(
  args: InferRequestType<typeof client.LinkedTransactions.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LinkedTransactions.$put(args, options))
}

export async function getLinkedTransactionsLinkedTransactionID(
  args: InferRequestType<(typeof client.LinkedTransactions)[':LinkedTransactionID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LinkedTransactions[':LinkedTransactionID'].$get(args, options))
}

export async function postLinkedTransactionsLinkedTransactionID(
  args: InferRequestType<(typeof client.LinkedTransactions)[':LinkedTransactionID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.LinkedTransactions[':LinkedTransactionID'].$post(args, options))
}

export async function deleteLinkedTransactionsLinkedTransactionID(
  args: InferRequestType<(typeof client.LinkedTransactions)[':LinkedTransactionID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.LinkedTransactions[':LinkedTransactionID'].$delete(args, options),
  )
}

export async function getManualJournals(
  args: InferRequestType<typeof client.ManualJournals.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ManualJournals.$get(args, options))
}

export async function putManualJournals(
  args: InferRequestType<typeof client.ManualJournals.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ManualJournals.$put(args, options))
}

export async function postManualJournals(
  args: InferRequestType<typeof client.ManualJournals.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ManualJournals.$post(args, options))
}

export async function getManualJournalsManualJournalID(
  args: InferRequestType<(typeof client.ManualJournals)[':ManualJournalID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ManualJournals[':ManualJournalID'].$get(args, options))
}

export async function postManualJournalsManualJournalID(
  args: InferRequestType<(typeof client.ManualJournals)[':ManualJournalID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ManualJournals[':ManualJournalID'].$post(args, options))
}

export async function getManualJournalsManualJournalIDAttachments(
  args: InferRequestType<(typeof client.ManualJournals)[':ManualJournalID']['Attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ManualJournals[':ManualJournalID'].Attachments.$get(args, options),
  )
}

export async function getManualJournalsManualJournalIDAttachmentsAttachmentID(
  args: InferRequestType<
    (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ManualJournals[':ManualJournalID'].Attachments[':AttachmentID'].$get(args, options),
  )
}

export async function getManualJournalsManualJournalIDAttachmentsFileName(
  args: InferRequestType<
    (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':FileName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ManualJournals[':ManualJournalID'].Attachments[':FileName'].$get(args, options),
  )
}

export async function putManualJournalsManualJournalIDAttachmentsFileName(
  args: InferRequestType<
    (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':FileName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ManualJournals[':ManualJournalID'].Attachments[':FileName'].$put(args, options),
  )
}

export async function postManualJournalsManualJournalIDAttachmentsFileName(
  args: InferRequestType<
    (typeof client.ManualJournals)[':ManualJournalID']['Attachments'][':FileName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ManualJournals[':ManualJournalID'].Attachments[':FileName'].$post(args, options),
  )
}

export async function getManualJournalsManualJournalIDHistory(
  args: InferRequestType<(typeof client.ManualJournals)[':ManualJournalID']['History']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ManualJournals[':ManualJournalID'].History.$get(args, options))
}

export async function putManualJournalsManualJournalIDHistory(
  args: InferRequestType<(typeof client.ManualJournals)[':ManualJournalID']['History']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ManualJournals[':ManualJournalID'].History.$put(args, options))
}

export async function getOrganisation(
  args: InferRequestType<typeof client.Organisation.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Organisation.$get(args, options))
}

export async function getOrganisationActions(
  args: InferRequestType<typeof client.Organisation.Actions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Organisation.Actions.$get(args, options))
}

export async function getOrganisationOrganisationIDCISSettings(
  args: InferRequestType<(typeof client.Organisation)[':OrganisationID']['CISSettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Organisation[':OrganisationID'].CISSettings.$get(args, options))
}

export async function getOverpayments(
  args: InferRequestType<typeof client.Overpayments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Overpayments.$get(args, options))
}

export async function getOverpaymentsOverpaymentID(
  args: InferRequestType<(typeof client.Overpayments)[':OverpaymentID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Overpayments[':OverpaymentID'].$get(args, options))
}

export async function putOverpaymentsOverpaymentIDAllocations(
  args: InferRequestType<(typeof client.Overpayments)[':OverpaymentID']['Allocations']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Overpayments[':OverpaymentID'].Allocations.$put(args, options))
}

export async function deleteOverpaymentsOverpaymentIDAllocationsAllocationID(
  args: InferRequestType<
    (typeof client.Overpayments)[':OverpaymentID']['Allocations'][':AllocationID']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Overpayments[':OverpaymentID'].Allocations[':AllocationID'].$delete(args, options),
  )
}

export async function getOverpaymentsOverpaymentIDHistory(
  args: InferRequestType<(typeof client.Overpayments)[':OverpaymentID']['History']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Overpayments[':OverpaymentID'].History.$get(args, options))
}

export async function putOverpaymentsOverpaymentIDHistory(
  args: InferRequestType<(typeof client.Overpayments)[':OverpaymentID']['History']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Overpayments[':OverpaymentID'].History.$put(args, options))
}

export async function getPayments(
  args: InferRequestType<typeof client.Payments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Payments.$get(args, options))
}

export async function putPayments(
  args: InferRequestType<typeof client.Payments.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Payments.$put(args, options))
}

export async function postPayments(
  args: InferRequestType<typeof client.Payments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Payments.$post(args, options))
}

export async function getPaymentsPaymentID(
  args: InferRequestType<(typeof client.Payments)[':PaymentID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Payments[':PaymentID'].$get(args, options))
}

export async function postPaymentsPaymentID(
  args: InferRequestType<(typeof client.Payments)[':PaymentID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Payments[':PaymentID'].$post(args, options))
}

export async function getPaymentsPaymentIDHistory(
  args: InferRequestType<(typeof client.Payments)[':PaymentID']['History']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Payments[':PaymentID'].History.$get(args, options))
}

export async function putPaymentsPaymentIDHistory(
  args: InferRequestType<(typeof client.Payments)[':PaymentID']['History']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Payments[':PaymentID'].History.$put(args, options))
}

export async function getPaymentServices(
  args: InferRequestType<typeof client.PaymentServices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.PaymentServices.$get(args, options))
}

export async function putPaymentServices(
  args: InferRequestType<typeof client.PaymentServices.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.PaymentServices.$put(args, options))
}

export async function getPrepayments(
  args: InferRequestType<typeof client.Prepayments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Prepayments.$get(args, options))
}

export async function getPrepaymentsPrepaymentID(
  args: InferRequestType<(typeof client.Prepayments)[':PrepaymentID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Prepayments[':PrepaymentID'].$get(args, options))
}

export async function putPrepaymentsPrepaymentIDAllocations(
  args: InferRequestType<(typeof client.Prepayments)[':PrepaymentID']['Allocations']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Prepayments[':PrepaymentID'].Allocations.$put(args, options))
}

export async function deletePrepaymentsPrepaymentIDAllocationsAllocationID(
  args: InferRequestType<
    (typeof client.Prepayments)[':PrepaymentID']['Allocations'][':AllocationID']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Prepayments[':PrepaymentID'].Allocations[':AllocationID'].$delete(args, options),
  )
}

export async function getPrepaymentsPrepaymentIDHistory(
  args: InferRequestType<(typeof client.Prepayments)[':PrepaymentID']['History']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Prepayments[':PrepaymentID'].History.$get(args, options))
}

export async function putPrepaymentsPrepaymentIDHistory(
  args: InferRequestType<(typeof client.Prepayments)[':PrepaymentID']['History']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Prepayments[':PrepaymentID'].History.$put(args, options))
}

export async function getPurchaseOrders(
  args: InferRequestType<typeof client.PurchaseOrders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.PurchaseOrders.$get(args, options))
}

export async function putPurchaseOrders(
  args: InferRequestType<typeof client.PurchaseOrders.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.PurchaseOrders.$put(args, options))
}

export async function postPurchaseOrders(
  args: InferRequestType<typeof client.PurchaseOrders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.PurchaseOrders.$post(args, options))
}

export async function getPurchaseOrdersPurchaseOrderIDPdf(
  args: InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['pdf']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.PurchaseOrders[':PurchaseOrderID'].pdf.$get(args, options))
}

export async function getPurchaseOrdersPurchaseOrderID(
  args: InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.PurchaseOrders[':PurchaseOrderID'].$get(args, options))
}

export async function postPurchaseOrdersPurchaseOrderID(
  args: InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.PurchaseOrders[':PurchaseOrderID'].$post(args, options))
}

export async function getPurchaseOrdersPurchaseOrderNumber(
  args: InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.PurchaseOrders[':PurchaseOrderNumber'].$get(args, options))
}

export async function getPurchaseOrdersPurchaseOrderIDHistory(
  args: InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['History']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.PurchaseOrders[':PurchaseOrderID'].History.$get(args, options))
}

export async function putPurchaseOrdersPurchaseOrderIDHistory(
  args: InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['History']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.PurchaseOrders[':PurchaseOrderID'].History.$put(args, options))
}

export async function getPurchaseOrdersPurchaseOrderIDAttachments(
  args: InferRequestType<(typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.PurchaseOrders[':PurchaseOrderID'].Attachments.$get(args, options),
  )
}

export async function getPurchaseOrdersPurchaseOrderIDAttachmentsAttachmentID(
  args: InferRequestType<
    (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.PurchaseOrders[':PurchaseOrderID'].Attachments[':AttachmentID'].$get(args, options),
  )
}

export async function getPurchaseOrdersPurchaseOrderIDAttachmentsFileName(
  args: InferRequestType<
    (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':FileName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.PurchaseOrders[':PurchaseOrderID'].Attachments[':FileName'].$get(args, options),
  )
}

export async function putPurchaseOrdersPurchaseOrderIDAttachmentsFileName(
  args: InferRequestType<
    (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':FileName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.PurchaseOrders[':PurchaseOrderID'].Attachments[':FileName'].$put(args, options),
  )
}

export async function postPurchaseOrdersPurchaseOrderIDAttachmentsFileName(
  args: InferRequestType<
    (typeof client.PurchaseOrders)[':PurchaseOrderID']['Attachments'][':FileName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.PurchaseOrders[':PurchaseOrderID'].Attachments[':FileName'].$post(args, options),
  )
}

export async function getQuotes(
  args: InferRequestType<typeof client.Quotes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Quotes.$get(args, options))
}

export async function putQuotes(
  args: InferRequestType<typeof client.Quotes.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Quotes.$put(args, options))
}

export async function postQuotes(
  args: InferRequestType<typeof client.Quotes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Quotes.$post(args, options))
}

export async function getQuotesQuoteID(
  args: InferRequestType<(typeof client.Quotes)[':QuoteID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Quotes[':QuoteID'].$get(args, options))
}

export async function postQuotesQuoteID(
  args: InferRequestType<(typeof client.Quotes)[':QuoteID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Quotes[':QuoteID'].$post(args, options))
}

export async function getQuotesQuoteIDHistory(
  args: InferRequestType<(typeof client.Quotes)[':QuoteID']['History']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Quotes[':QuoteID'].History.$get(args, options))
}

export async function putQuotesQuoteIDHistory(
  args: InferRequestType<(typeof client.Quotes)[':QuoteID']['History']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Quotes[':QuoteID'].History.$put(args, options))
}

export async function getQuotesQuoteIDPdf(
  args: InferRequestType<(typeof client.Quotes)[':QuoteID']['pdf']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Quotes[':QuoteID'].pdf.$get(args, options))
}

export async function getQuotesQuoteIDAttachments(
  args: InferRequestType<(typeof client.Quotes)[':QuoteID']['Attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Quotes[':QuoteID'].Attachments.$get(args, options))
}

export async function getQuotesQuoteIDAttachmentsAttachmentID(
  args: InferRequestType<
    (typeof client.Quotes)[':QuoteID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Quotes[':QuoteID'].Attachments[':AttachmentID'].$get(args, options),
  )
}

export async function getQuotesQuoteIDAttachmentsFileName(
  args: InferRequestType<(typeof client.Quotes)[':QuoteID']['Attachments'][':FileName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Quotes[':QuoteID'].Attachments[':FileName'].$get(args, options))
}

export async function putQuotesQuoteIDAttachmentsFileName(
  args: InferRequestType<(typeof client.Quotes)[':QuoteID']['Attachments'][':FileName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Quotes[':QuoteID'].Attachments[':FileName'].$put(args, options))
}

export async function postQuotesQuoteIDAttachmentsFileName(
  args: InferRequestType<(typeof client.Quotes)[':QuoteID']['Attachments'][':FileName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Quotes[':QuoteID'].Attachments[':FileName'].$post(args, options),
  )
}

export async function getReceipts(
  args: InferRequestType<typeof client.Receipts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Receipts.$get(args, options))
}

export async function putReceipts(
  args: InferRequestType<typeof client.Receipts.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Receipts.$put(args, options))
}

export async function getReceiptsReceiptID(
  args: InferRequestType<(typeof client.Receipts)[':ReceiptID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Receipts[':ReceiptID'].$get(args, options))
}

export async function postReceiptsReceiptID(
  args: InferRequestType<(typeof client.Receipts)[':ReceiptID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Receipts[':ReceiptID'].$post(args, options))
}

export async function getReceiptsReceiptIDAttachments(
  args: InferRequestType<(typeof client.Receipts)[':ReceiptID']['Attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Receipts[':ReceiptID'].Attachments.$get(args, options))
}

export async function getReceiptsReceiptIDAttachmentsAttachmentID(
  args: InferRequestType<
    (typeof client.Receipts)[':ReceiptID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Receipts[':ReceiptID'].Attachments[':AttachmentID'].$get(args, options),
  )
}

export async function getReceiptsReceiptIDAttachmentsFileName(
  args: InferRequestType<
    (typeof client.Receipts)[':ReceiptID']['Attachments'][':FileName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Receipts[':ReceiptID'].Attachments[':FileName'].$get(args, options),
  )
}

export async function putReceiptsReceiptIDAttachmentsFileName(
  args: InferRequestType<
    (typeof client.Receipts)[':ReceiptID']['Attachments'][':FileName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Receipts[':ReceiptID'].Attachments[':FileName'].$put(args, options),
  )
}

export async function postReceiptsReceiptIDAttachmentsFileName(
  args: InferRequestType<
    (typeof client.Receipts)[':ReceiptID']['Attachments'][':FileName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Receipts[':ReceiptID'].Attachments[':FileName'].$post(args, options),
  )
}

export async function getReceiptsReceiptIDHistory(
  args: InferRequestType<(typeof client.Receipts)[':ReceiptID']['History']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Receipts[':ReceiptID'].History.$get(args, options))
}

export async function putReceiptsReceiptIDHistory(
  args: InferRequestType<(typeof client.Receipts)[':ReceiptID']['History']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Receipts[':ReceiptID'].History.$put(args, options))
}

export async function getRepeatingInvoices(
  args: InferRequestType<typeof client.RepeatingInvoices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.RepeatingInvoices.$get(args, options))
}

export async function putRepeatingInvoices(
  args: InferRequestType<typeof client.RepeatingInvoices.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.RepeatingInvoices.$put(args, options))
}

export async function postRepeatingInvoices(
  args: InferRequestType<typeof client.RepeatingInvoices.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.RepeatingInvoices.$post(args, options))
}

export async function getRepeatingInvoicesRepeatingInvoiceID(
  args: InferRequestType<(typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.RepeatingInvoices[':RepeatingInvoiceID'].$get(args, options))
}

export async function postRepeatingInvoicesRepeatingInvoiceID(
  args: InferRequestType<(typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.RepeatingInvoices[':RepeatingInvoiceID'].$post(args, options))
}

export async function getRepeatingInvoicesRepeatingInvoiceIDAttachments(
  args: InferRequestType<
    (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.RepeatingInvoices[':RepeatingInvoiceID'].Attachments.$get(args, options),
  )
}

export async function getRepeatingInvoicesRepeatingInvoiceIDAttachmentsAttachmentID(
  args: InferRequestType<
    (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':AttachmentID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.RepeatingInvoices[':RepeatingInvoiceID'].Attachments[':AttachmentID'].$get(
      args,
      options,
    ),
  )
}

export async function getRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileName(
  args: InferRequestType<
    (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':FileName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.RepeatingInvoices[':RepeatingInvoiceID'].Attachments[':FileName'].$get(args, options),
  )
}

export async function putRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileName(
  args: InferRequestType<
    (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':FileName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.RepeatingInvoices[':RepeatingInvoiceID'].Attachments[':FileName'].$put(args, options),
  )
}

export async function postRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileName(
  args: InferRequestType<
    (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['Attachments'][':FileName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.RepeatingInvoices[':RepeatingInvoiceID'].Attachments[':FileName'].$post(args, options),
  )
}

export async function getRepeatingInvoicesRepeatingInvoiceIDHistory(
  args: InferRequestType<
    (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['History']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.RepeatingInvoices[':RepeatingInvoiceID'].History.$get(args, options),
  )
}

export async function putRepeatingInvoicesRepeatingInvoiceIDHistory(
  args: InferRequestType<
    (typeof client.RepeatingInvoices)[':RepeatingInvoiceID']['History']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.RepeatingInvoices[':RepeatingInvoiceID'].History.$put(args, options),
  )
}

export async function getReportsTenNinetyNine(
  args: InferRequestType<typeof client.Reports.TenNinetyNine.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Reports.TenNinetyNine.$get(args, options))
}

export async function getReportsAgedPayablesByContact(
  args: InferRequestType<typeof client.Reports.AgedPayablesByContact.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Reports.AgedPayablesByContact.$get(args, options))
}

export async function getReportsAgedReceivablesByContact(
  args: InferRequestType<typeof client.Reports.AgedReceivablesByContact.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Reports.AgedReceivablesByContact.$get(args, options))
}

export async function getReportsBalanceSheet(
  args: InferRequestType<typeof client.Reports.BalanceSheet.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Reports.BalanceSheet.$get(args, options))
}

export async function getReportsBankSummary(
  args: InferRequestType<typeof client.Reports.BankSummary.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Reports.BankSummary.$get(args, options))
}

export async function getReportsReportID(
  args: InferRequestType<(typeof client.Reports)[':ReportID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Reports[':ReportID'].$get(args, options))
}

export async function getReportsBudgetSummary(
  args: InferRequestType<typeof client.Reports.BudgetSummary.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Reports.BudgetSummary.$get(args, options))
}

export async function getReportsExecutiveSummary(
  args: InferRequestType<typeof client.Reports.ExecutiveSummary.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Reports.ExecutiveSummary.$get(args, options))
}

export async function getReports(
  args: InferRequestType<typeof client.Reports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Reports.$get(args, options))
}

export async function getReportsProfitAndLoss(
  args: InferRequestType<typeof client.Reports.ProfitAndLoss.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Reports.ProfitAndLoss.$get(args, options))
}

export async function getReportsTrialBalance(
  args: InferRequestType<typeof client.Reports.TrialBalance.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Reports.TrialBalance.$get(args, options))
}

export async function postSetup(
  args: InferRequestType<typeof client.Setup.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Setup.$post(args, options))
}

export async function getTaxRates(
  args: InferRequestType<typeof client.TaxRates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.TaxRates.$get(args, options))
}

export async function putTaxRates(
  args: InferRequestType<typeof client.TaxRates.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.TaxRates.$put(args, options))
}

export async function postTaxRates(
  args: InferRequestType<typeof client.TaxRates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.TaxRates.$post(args, options))
}

export async function getTaxRatesTaxType(
  args: InferRequestType<(typeof client.TaxRates)[':TaxType']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.TaxRates[':TaxType'].$get(args, options))
}

export async function getTrackingCategories(
  args: InferRequestType<typeof client.TrackingCategories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.TrackingCategories.$get(args, options))
}

export async function putTrackingCategories(
  args: InferRequestType<typeof client.TrackingCategories.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.TrackingCategories.$put(args, options))
}

export async function getTrackingCategoriesTrackingCategoryID(
  args: InferRequestType<(typeof client.TrackingCategories)[':TrackingCategoryID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.TrackingCategories[':TrackingCategoryID'].$get(args, options))
}

export async function postTrackingCategoriesTrackingCategoryID(
  args: InferRequestType<(typeof client.TrackingCategories)[':TrackingCategoryID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.TrackingCategories[':TrackingCategoryID'].$post(args, options))
}

export async function deleteTrackingCategoriesTrackingCategoryID(
  args: InferRequestType<(typeof client.TrackingCategories)[':TrackingCategoryID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.TrackingCategories[':TrackingCategoryID'].$delete(args, options),
  )
}

export async function putTrackingCategoriesTrackingCategoryIDOptions(
  args: InferRequestType<
    (typeof client.TrackingCategories)[':TrackingCategoryID']['Options']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.TrackingCategories[':TrackingCategoryID'].Options.$put(args, options),
  )
}

export async function postTrackingCategoriesTrackingCategoryIDOptionsTrackingOptionID(
  args: InferRequestType<
    (typeof client.TrackingCategories)[':TrackingCategoryID']['Options'][':TrackingOptionID']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.TrackingCategories[':TrackingCategoryID'].Options[':TrackingOptionID'].$post(
      args,
      options,
    ),
  )
}

export async function deleteTrackingCategoriesTrackingCategoryIDOptionsTrackingOptionID(
  args: InferRequestType<
    (typeof client.TrackingCategories)[':TrackingCategoryID']['Options'][':TrackingOptionID']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.TrackingCategories[':TrackingCategoryID'].Options[':TrackingOptionID'].$delete(
      args,
      options,
    ),
  )
}

export async function getUsers(
  args: InferRequestType<typeof client.Users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Users.$get(args, options))
}

export async function getUsersUserID(
  args: InferRequestType<(typeof client.Users)[':UserID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Users[':UserID'].$get(args, options))
}
