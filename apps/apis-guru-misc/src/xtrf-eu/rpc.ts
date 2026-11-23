import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccountingCustomersInvoices(
  args: InferRequestType<typeof client.accounting.customers.invoices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting.customers.invoices.$get(args, options))
}

export async function postAccountingCustomersInvoices(
  args: InferRequestType<typeof client.accounting.customers.invoices.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting.customers.invoices.$post(args, options))
}

export async function postAccountingCustomersInvoicesDocuments(
  args: InferRequestType<typeof client.accounting.customers.invoices.documents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting.customers.invoices.documents.$post(args, options))
}

export async function getAccountingCustomersInvoicesIds(
  args: InferRequestType<typeof client.accounting.customers.invoices.ids.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting.customers.invoices.ids.$get(args, options))
}

export async function postAccountingCustomersInvoicesSendReminders(
  args: InferRequestType<typeof client.accounting.customers.invoices.sendReminders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounting.customers.invoices.sendReminders.$post(args, options),
  )
}

export async function getAccountingCustomersInvoicesInvoiceId(
  args: InferRequestType<(typeof client.accounting.customers.invoices)[':invoiceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting.customers.invoices[':invoiceId'].$get(args, options))
}

export async function deleteAccountingCustomersInvoicesInvoiceId(
  args: InferRequestType<(typeof client.accounting.customers.invoices)[':invoiceId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounting.customers.invoices[':invoiceId'].$delete(args, options),
  )
}

export async function getAccountingCustomersInvoicesInvoiceIdDates(
  args: InferRequestType<
    (typeof client.accounting.customers.invoices)[':invoiceId']['dates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounting.customers.invoices[':invoiceId'].dates.$get(args, options),
  )
}

export async function getAccountingCustomersInvoicesInvoiceIdDocument(
  args: InferRequestType<
    (typeof client.accounting.customers.invoices)[':invoiceId']['document']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounting.customers.invoices[':invoiceId'].document.$get(args, options),
  )
}

export async function postAccountingCustomersInvoicesInvoiceIdDuplicate(
  args: InferRequestType<
    (typeof client.accounting.customers.invoices)[':invoiceId']['duplicate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounting.customers.invoices[':invoiceId'].duplicate.$post(args, options),
  )
}

export async function postAccountingCustomersInvoicesInvoiceIdDuplicateProForma(
  args: InferRequestType<
    (typeof client.accounting.customers.invoices)[':invoiceId']['duplicate']['proForma']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounting.customers.invoices[':invoiceId'].duplicate.proForma.$post(args, options),
  )
}

export async function getAccountingCustomersInvoicesInvoiceIdPaymentTerms(
  args: InferRequestType<
    (typeof client.accounting.customers.invoices)[':invoiceId']['paymentTerms']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounting.customers.invoices[':invoiceId'].paymentTerms.$get(args, options),
  )
}

export async function getAccountingCustomersInvoicesInvoiceIdPayments(
  args: InferRequestType<
    (typeof client.accounting.customers.invoices)[':invoiceId']['payments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounting.customers.invoices[':invoiceId'].payments.$get(args, options),
  )
}

export async function postAccountingCustomersInvoicesInvoiceIdPayments(
  args: InferRequestType<
    (typeof client.accounting.customers.invoices)[':invoiceId']['payments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounting.customers.invoices[':invoiceId'].payments.$post(args, options),
  )
}

export async function postAccountingCustomersInvoicesInvoiceIdSendReminder(
  args: InferRequestType<
    (typeof client.accounting.customers.invoices)[':invoiceId']['sendReminder']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounting.customers.invoices[':invoiceId'].sendReminder.$post(args, options),
  )
}

export async function deleteAccountingCustomersPaymentsPaymentId(
  args: InferRequestType<(typeof client.accounting.customers.payments)[':paymentId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounting.customers.payments[':paymentId'].$delete(args, options),
  )
}

export async function getAccountingProvidersInvoices(
  args: InferRequestType<typeof client.accounting.providers.invoices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting.providers.invoices.$get(args, options))
}

export async function postAccountingProvidersInvoices(
  args: InferRequestType<typeof client.accounting.providers.invoices.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting.providers.invoices.$post(args, options))
}

export async function getAccountingProvidersInvoicesIds(
  args: InferRequestType<typeof client.accounting.providers.invoices.ids.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting.providers.invoices.ids.$get(args, options))
}

export async function getAccountingProvidersInvoicesInvoiceId(
  args: InferRequestType<(typeof client.accounting.providers.invoices)[':invoiceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting.providers.invoices[':invoiceId'].$get(args, options))
}

export async function deleteAccountingProvidersInvoicesInvoiceId(
  args: InferRequestType<(typeof client.accounting.providers.invoices)[':invoiceId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounting.providers.invoices[':invoiceId'].$delete(args, options),
  )
}

export async function getAccountingProvidersInvoicesInvoiceIdDocument(
  args: InferRequestType<
    (typeof client.accounting.providers.invoices)[':invoiceId']['document']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounting.providers.invoices[':invoiceId'].document.$get(args, options),
  )
}

export async function getAccountingProvidersInvoicesInvoiceIdPayments(
  args: InferRequestType<
    (typeof client.accounting.providers.invoices)[':invoiceId']['payments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounting.providers.invoices[':invoiceId'].payments.$get(args, options),
  )
}

export async function postAccountingProvidersInvoicesInvoiceIdPayments(
  args: InferRequestType<
    (typeof client.accounting.providers.invoices)[':invoiceId']['payments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounting.providers.invoices[':invoiceId'].payments.$post(args, options),
  )
}

export async function postAccountingProvidersInvoicesInvoiceIdSend(
  args: InferRequestType<
    (typeof client.accounting.providers.invoices)[':invoiceId']['send']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounting.providers.invoices[':invoiceId'].send.$post(args, options),
  )
}

export async function postAccountingProvidersInvoicesInvoiceIdStatus(
  args: InferRequestType<
    (typeof client.accounting.providers.invoices)[':invoiceId']['status']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounting.providers.invoices[':invoiceId'].status.$post(args, options),
  )
}

export async function deleteAccountingProvidersPaymentsPaymentId(
  args: InferRequestType<(typeof client.accounting.providers.payments)[':paymentId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounting.providers.payments[':paymentId'].$delete(args, options),
  )
}

export async function getBrowser(
  args: InferRequestType<typeof client.browser.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.browser.$get(args, options))
}

export async function getBrowserCsv(
  args: InferRequestType<typeof client.browser.csv.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.browser.csv.$get(args, options))
}

export async function getBrowserViewsDetailsForClassName(
  args: InferRequestType<(typeof client.browser.views.details.for)[':className']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.browser.views.details.for[':className'].$get(args, options))
}

export async function getBrowserViewsDetailsForClassNameViewId(
  args: InferRequestType<
    (typeof client.browser.views.details.for)[':className'][':viewId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.browser.views.details.for[':className'][':viewId'].$get(args, options),
  )
}

export async function postBrowserViewsDetailsForClassNameViewId(
  args: InferRequestType<
    (typeof client.browser.views.details.for)[':className'][':viewId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.browser.views.details.for[':className'][':viewId'].$post(args, options),
  )
}

export async function getBrowserViewsForClassName(
  args: InferRequestType<(typeof client.browser.views.for)[':className']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.browser.views.for[':className'].$get(args, options))
}

export async function postBrowserViewsForClassName(
  args: InferRequestType<(typeof client.browser.views.for)[':className']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.browser.views.for[':className'].$post(args, options))
}

export async function getBrowserViewsViewId(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.browser.views[':viewId'].$get(args, options))
}

export async function putBrowserViewsViewId(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.browser.views[':viewId'].$put(args, options))
}

export async function deleteBrowserViewsViewId(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.browser.views[':viewId'].$delete(args, options))
}

export async function getBrowserViewsViewIdColumns(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['columns']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.browser.views[':viewId'].columns.$get(args, options))
}

export async function putBrowserViewsViewIdColumns(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['columns']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.browser.views[':viewId'].columns.$put(args, options))
}

export async function deleteBrowserViewsViewIdColumnsColumnName(
  args: InferRequestType<
    (typeof client.browser.views)[':viewId']['columns'][':columnName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.browser.views[':viewId'].columns[':columnName'].$delete(args, options),
  )
}

export async function getBrowserViewsViewIdColumnsColumnNameSettings(
  args: InferRequestType<
    (typeof client.browser.views)[':viewId']['columns'][':columnName']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.browser.views[':viewId'].columns[':columnName'].settings.$get(args, options),
  )
}

export async function putBrowserViewsViewIdColumnsColumnNameSettings(
  args: InferRequestType<
    (typeof client.browser.views)[':viewId']['columns'][':columnName']['settings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.browser.views[':viewId'].columns[':columnName'].settings.$put(args, options),
  )
}

export async function getBrowserViewsViewIdFilter(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['filter']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.browser.views[':viewId'].filter.$get(args, options))
}

export async function putBrowserViewsViewIdFilter(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['filter']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.browser.views[':viewId'].filter.$put(args, options))
}

export async function putBrowserViewsViewIdFilterFilterProperty(
  args: InferRequestType<
    (typeof client.browser.views)[':viewId']['filter'][':filterProperty']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.browser.views[':viewId'].filter[':filterProperty'].$put(args, options),
  )
}

export async function getBrowserViewsViewIdOrder(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['order']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.browser.views[':viewId'].order.$get(args, options))
}

export async function putBrowserViewsViewIdOrder(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['order']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.browser.views[':viewId'].order.$put(args, options))
}

export async function getBrowserViewsViewIdPermissions(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.browser.views[':viewId'].permissions.$get(args, options))
}

export async function putBrowserViewsViewIdPermissions(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['permissions']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.browser.views[':viewId'].permissions.$put(args, options))
}

export async function getBrowserViewsViewIdSettings(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.browser.views[':viewId'].settings.$get(args, options))
}

export async function putBrowserViewsViewIdSettings(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.browser.views[':viewId'].settings.$put(args, options))
}

export async function getBrowserViewsViewIdSettingsLocal(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['settings']['local']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.browser.views[':viewId'].settings.local.$get(args, options))
}

export async function putBrowserViewsViewIdSettingsLocal(
  args: InferRequestType<(typeof client.browser.views)[':viewId']['settings']['local']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.browser.views[':viewId'].settings.local.$put(args, options))
}

export async function getCustomers(
  args: InferRequestType<typeof client.customers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers.$get(args, options))
}

export async function postCustomers(
  args: InferRequestType<typeof client.customers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers.$post(args, options))
}

export async function getCustomersIds(
  args: InferRequestType<typeof client.customers.ids.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers.ids.$get(args, options))
}

export async function postCustomersPersons(
  args: InferRequestType<typeof client.customers.persons.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers.persons.$post(args, options))
}

export async function postCustomersPersonsAccessToken(
  args: InferRequestType<typeof client.customers.persons.accessToken.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers.persons.accessToken.$post(args, options))
}

export async function getCustomersPersonsIds(
  args: InferRequestType<typeof client.customers.persons.ids.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers.persons.ids.$get(args, options))
}

export async function getCustomersPersonsPersonId(
  args: InferRequestType<(typeof client.customers.persons)[':personId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers.persons[':personId'].$get(args, options))
}

export async function putCustomersPersonsPersonId(
  args: InferRequestType<(typeof client.customers.persons)[':personId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers.persons[':personId'].$put(args, options))
}

export async function deleteCustomersPersonsPersonId(
  args: InferRequestType<(typeof client.customers.persons)[':personId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers.persons[':personId'].$delete(args, options))
}

export async function getCustomersPersonsPersonIdContact(
  args: InferRequestType<(typeof client.customers.persons)[':personId']['contact']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers.persons[':personId'].contact.$get(args, options))
}

export async function putCustomersPersonsPersonIdContact(
  args: InferRequestType<(typeof client.customers.persons)[':personId']['contact']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers.persons[':personId'].contact.$put(args, options))
}

export async function getCustomersPersonsPersonIdCustomFields(
  args: InferRequestType<(typeof client.customers.persons)[':personId']['customFields']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers.persons[':personId'].customFields.$get(args, options))
}

export async function putCustomersPersonsPersonIdCustomFields(
  args: InferRequestType<(typeof client.customers.persons)[':personId']['customFields']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers.persons[':personId'].customFields.$put(args, options))
}

export async function deleteCustomersPriceListsPriceListId(
  args: InferRequestType<(typeof client.customers.priceLists)[':priceListId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers.priceLists[':priceListId'].$delete(args, options))
}

export async function getCustomersCustomerId(
  args: InferRequestType<(typeof client.customers)[':customerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':customerId'].$get(args, options))
}

export async function putCustomersCustomerId(
  args: InferRequestType<(typeof client.customers)[':customerId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':customerId'].$put(args, options))
}

export async function deleteCustomersCustomerId(
  args: InferRequestType<(typeof client.customers)[':customerId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':customerId'].$delete(args, options))
}

export async function getCustomersCustomerIdAddress(
  args: InferRequestType<(typeof client.customers)[':customerId']['address']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':customerId'].address.$get(args, options))
}

export async function putCustomersCustomerIdAddress(
  args: InferRequestType<(typeof client.customers)[':customerId']['address']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':customerId'].address.$put(args, options))
}

export async function getCustomersCustomerIdCategories(
  args: InferRequestType<(typeof client.customers)[':customerId']['categories']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':customerId'].categories.$get(args, options))
}

export async function putCustomersCustomerIdCategories(
  args: InferRequestType<(typeof client.customers)[':customerId']['categories']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':customerId'].categories.$put(args, options))
}

export async function getCustomersCustomerIdContact(
  args: InferRequestType<(typeof client.customers)[':customerId']['contact']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':customerId'].contact.$get(args, options))
}

export async function putCustomersCustomerIdContact(
  args: InferRequestType<(typeof client.customers)[':customerId']['contact']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':customerId'].contact.$put(args, options))
}

export async function getCustomersCustomerIdCorrespondenceAddress(
  args: InferRequestType<(typeof client.customers)[':customerId']['correspondenceAddress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':customerId'].correspondenceAddress.$get(args, options),
  )
}

export async function putCustomersCustomerIdCorrespondenceAddress(
  args: InferRequestType<(typeof client.customers)[':customerId']['correspondenceAddress']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':customerId'].correspondenceAddress.$put(args, options),
  )
}

export async function getCustomersCustomerIdCustomFields(
  args: InferRequestType<(typeof client.customers)[':customerId']['customFields']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':customerId'].customFields.$get(args, options))
}

export async function putCustomersCustomerIdCustomFields(
  args: InferRequestType<(typeof client.customers)[':customerId']['customFields']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':customerId'].customFields.$put(args, options))
}

export async function getCustomersCustomerIdCustomFieldsCustomFieldKey(
  args: InferRequestType<
    (typeof client.customers)[':customerId']['customFields'][':customFieldKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':customerId'].customFields[':customFieldKey'].$get(args, options),
  )
}

export async function putCustomersCustomerIdCustomFieldsCustomFieldKey(
  args: InferRequestType<
    (typeof client.customers)[':customerId']['customFields'][':customFieldKey']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':customerId'].customFields[':customFieldKey'].$put(args, options),
  )
}

export async function getCustomersCustomerIdIndustries(
  args: InferRequestType<(typeof client.customers)[':customerId']['industries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':customerId'].industries.$get(args, options))
}

export async function putCustomersCustomerIdIndustries(
  args: InferRequestType<(typeof client.customers)[':customerId']['industries']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':customerId'].industries.$put(args, options))
}

export async function getDictionariesActive(options?: ClientRequestOptions) {
  return await parseResponse(client.dictionaries.active.$get(undefined, options))
}

export async function getDictionariesAll(options?: ClientRequestOptions) {
  return await parseResponse(client.dictionaries.all.$get(undefined, options))
}

export async function getDictionariesCurrencyIsoCodeExchangeRate(
  args: InferRequestType<(typeof client.dictionaries.currency)[':isoCode']['exchangeRate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dictionaries.currency[':isoCode'].exchangeRate.$get(args, options),
  )
}

export async function postDictionariesCurrencyIsoCodeExchangeRate(
  args: InferRequestType<
    (typeof client.dictionaries.currency)[':isoCode']['exchangeRate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dictionaries.currency[':isoCode'].exchangeRate.$post(args, options),
  )
}

export async function getDictionariesTypeActive(
  args: InferRequestType<(typeof client.dictionaries)[':type']['active']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dictionaries[':type'].active.$get(args, options))
}

export async function getDictionariesTypeAll(
  args: InferRequestType<(typeof client.dictionaries)[':type']['all']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dictionaries[':type'].all.$get(args, options))
}

export async function getDictionariesTypeId(
  args: InferRequestType<(typeof client.dictionaries)[':type'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dictionaries[':type'][':id'].$get(args, options))
}

export async function postFiles(
  args: InferRequestType<typeof client.files.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files.$post(args, options))
}

export async function getJobsJobId(
  args: InferRequestType<(typeof client.jobs)[':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':jobId'].$get(args, options))
}

export async function putJobsJobIdDates(
  args: InferRequestType<(typeof client.jobs)[':jobId']['dates']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':jobId'].dates.$put(args, options))
}

export async function getJobsJobIdFiles(
  args: InferRequestType<(typeof client.jobs)[':jobId']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':jobId'].files.$get(args, options))
}

export async function postJobsJobIdFilesOutput(
  args: InferRequestType<(typeof client.jobs)[':jobId']['files']['output']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':jobId'].files.output.$post(args, options))
}

export async function getJobsJobIdFilesFileId(
  args: InferRequestType<(typeof client.jobs)[':jobId']['files'][':fileId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':jobId'].files[':fileId'].$get(args, options))
}

export async function putJobsJobIdInstructions(
  args: InferRequestType<(typeof client.jobs)[':jobId']['instructions']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':jobId'].instructions.$put(args, options))
}

export async function putJobsJobIdStatus(
  args: InferRequestType<(typeof client.jobs)[':jobId']['status']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':jobId'].status.$put(args, options))
}

export async function putJobsJobIdVendor(
  args: InferRequestType<(typeof client.jobs)[':jobId']['vendor']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':jobId'].vendor.$put(args, options))
}

export async function getLicense(options?: ClientRequestOptions) {
  return await parseResponse(client.license.$get(undefined, options))
}

export async function postLicenseRefresh(options?: ClientRequestOptions) {
  return await parseResponse(client.license.refresh.$post(undefined, options))
}

export async function postMacrosMacroIdRun(
  args: InferRequestType<(typeof client.macros)[':macroId']['run']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.macros[':macroId'].run.$post(args, options))
}

export async function postProjects(
  args: InferRequestType<typeof client.projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects.$post(args, options))
}

export async function getProjectsFilesFileIdDownload(
  args: InferRequestType<(typeof client.projects.files)[':fileId']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects.files[':fileId'].download.$get(args, options))
}

export async function getProjectsIds(
  args: InferRequestType<typeof client.projects.ids.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects.ids.$get(args, options))
}

export async function getProjectsProjectId(
  args: InferRequestType<(typeof client.projects)[':projectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].$get(args, options))
}

export async function deleteProjectsProjectId(
  args: InferRequestType<(typeof client.projects)[':projectId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].$delete(args, options))
}

export async function getProjectsProjectIdContacts(
  args: InferRequestType<(typeof client.projects)[':projectId']['contacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].contacts.$get(args, options))
}

export async function putProjectsProjectIdContacts(
  args: InferRequestType<(typeof client.projects)[':projectId']['contacts']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].contacts.$put(args, options))
}

export async function getProjectsProjectIdCustomFields(
  args: InferRequestType<(typeof client.projects)[':projectId']['customFields']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].customFields.$get(args, options))
}

export async function putProjectsProjectIdCustomFields(
  args: InferRequestType<(typeof client.projects)[':projectId']['customFields']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].customFields.$put(args, options))
}

export async function getProjectsProjectIdDates(
  args: InferRequestType<(typeof client.projects)[':projectId']['dates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].dates.$get(args, options))
}

export async function putProjectsProjectIdDates(
  args: InferRequestType<(typeof client.projects)[':projectId']['dates']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].dates.$put(args, options))
}

export async function getProjectsProjectIdFinance(
  args: InferRequestType<(typeof client.projects)[':projectId']['finance']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].finance.$get(args, options))
}

export async function postProjectsProjectIdFinancePayables(
  args: InferRequestType<(typeof client.projects)[':projectId']['finance']['payables']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].finance.payables.$post(args, options))
}

export async function putProjectsProjectIdFinancePayablesPayableId(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['finance']['payables'][':payableId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].finance.payables[':payableId'].$put(args, options),
  )
}

export async function deleteProjectsProjectIdFinancePayablesPayableId(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['finance']['payables'][':payableId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].finance.payables[':payableId'].$delete(args, options),
  )
}

export async function postProjectsProjectIdFinanceReceivables(
  args: InferRequestType<(typeof client.projects)[':projectId']['finance']['receivables']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].finance.receivables.$post(args, options))
}

export async function putProjectsProjectIdFinanceReceivablesReceivableId(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['finance']['receivables'][':receivableId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].finance.receivables[':receivableId'].$put(args, options),
  )
}

export async function deleteProjectsProjectIdFinanceReceivablesReceivableId(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['finance']['receivables'][':receivableId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].finance.receivables[':receivableId'].$delete(args, options),
  )
}

export async function getProjectsProjectIdInstructions(
  args: InferRequestType<(typeof client.projects)[':projectId']['instructions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].instructions.$get(args, options))
}

export async function putProjectsProjectIdInstructions(
  args: InferRequestType<(typeof client.projects)[':projectId']['instructions']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].instructions.$put(args, options))
}

export async function postProjectsProjectIdLanguageCombinations(
  args: InferRequestType<(typeof client.projects)[':projectId']['languageCombinations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].languageCombinations.$post(args, options),
  )
}

export async function postProjectsProjectIdTasks(
  args: InferRequestType<(typeof client.projects)[':projectId']['tasks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].tasks.$post(args, options))
}

export async function getProvidersIds(
  args: InferRequestType<typeof client.providers.ids.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.ids.$get(args, options))
}

export async function getProvidersPersonsIds(
  args: InferRequestType<typeof client.providers.persons.ids.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.persons.ids.$get(args, options))
}

export async function getProvidersPersonsPersonId(
  args: InferRequestType<(typeof client.providers.persons)[':personId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.persons[':personId'].$get(args, options))
}

export async function deleteProvidersPersonsPersonId(
  args: InferRequestType<(typeof client.providers.persons)[':personId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.persons[':personId'].$delete(args, options))
}

export async function getProvidersPersonsPersonIdContact(
  args: InferRequestType<(typeof client.providers.persons)[':personId']['contact']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.persons[':personId'].contact.$get(args, options))
}

export async function getProvidersPersonsPersonIdCustomFields(
  args: InferRequestType<(typeof client.providers.persons)[':personId']['customFields']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.persons[':personId'].customFields.$get(args, options))
}

export async function postProvidersPersonsPersonIdNotificationInvitation(
  args: InferRequestType<
    (typeof client.providers.persons)[':personId']['notification']['invitation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.persons[':personId'].notification.invitation.$post(args, options),
  )
}

export async function deleteProvidersPriceListsPriceListId(
  args: InferRequestType<(typeof client.providers.priceLists)[':priceListId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.priceLists[':priceListId'].$delete(args, options))
}

export async function getProvidersProviderId(
  args: InferRequestType<(typeof client.providers)[':providerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers[':providerId'].$get(args, options))
}

export async function deleteProvidersProviderId(
  args: InferRequestType<(typeof client.providers)[':providerId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers[':providerId'].$delete(args, options))
}

export async function getProvidersProviderIdAddress(
  args: InferRequestType<(typeof client.providers)[':providerId']['address']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers[':providerId'].address.$get(args, options))
}

export async function getProvidersProviderIdCompetencies(
  args: InferRequestType<(typeof client.providers)[':providerId']['competencies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers[':providerId'].competencies.$get(args, options))
}

export async function getProvidersProviderIdContact(
  args: InferRequestType<(typeof client.providers)[':providerId']['contact']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers[':providerId'].contact.$get(args, options))
}

export async function getProvidersProviderIdCorrespondenceAddress(
  args: InferRequestType<(typeof client.providers)[':providerId']['correspondenceAddress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers[':providerId'].correspondenceAddress.$get(args, options),
  )
}

export async function getProvidersProviderIdCustomFields(
  args: InferRequestType<(typeof client.providers)[':providerId']['customFields']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers[':providerId'].customFields.$get(args, options))
}

export async function postProvidersProviderIdNotificationInvitation(
  args: InferRequestType<
    (typeof client.providers)[':providerId']['notification']['invitation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers[':providerId'].notification.invitation.$post(args, options),
  )
}

export async function getQuotesIds(
  args: InferRequestType<typeof client.quotes.ids.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotes.ids.$get(args, options))
}

export async function getQuotesQuoteId(
  args: InferRequestType<(typeof client.quotes)[':quoteId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotes[':quoteId'].$get(args, options))
}

export async function deleteQuotesQuoteId(
  args: InferRequestType<(typeof client.quotes)[':quoteId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotes[':quoteId'].$delete(args, options))
}

export async function postQuotesQuoteIdConfirmationSend(
  args: InferRequestType<(typeof client.quotes)[':quoteId']['confirmation']['send']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotes[':quoteId'].confirmation.send.$post(args, options))
}

export async function getQuotesQuoteIdCustomFields(
  args: InferRequestType<(typeof client.quotes)[':quoteId']['customFields']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotes[':quoteId'].customFields.$get(args, options))
}

export async function putQuotesQuoteIdCustomFields(
  args: InferRequestType<(typeof client.quotes)[':quoteId']['customFields']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotes[':quoteId'].customFields.$put(args, options))
}

export async function getQuotesQuoteIdDates(
  args: InferRequestType<(typeof client.quotes)[':quoteId']['dates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotes[':quoteId'].dates.$get(args, options))
}

export async function getQuotesQuoteIdFinance(
  args: InferRequestType<(typeof client.quotes)[':quoteId']['finance']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotes[':quoteId'].finance.$get(args, options))
}

export async function postQuotesQuoteIdFinancePayables(
  args: InferRequestType<(typeof client.quotes)[':quoteId']['finance']['payables']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotes[':quoteId'].finance.payables.$post(args, options))
}

export async function putQuotesQuoteIdFinancePayablesPayableId(
  args: InferRequestType<
    (typeof client.quotes)[':quoteId']['finance']['payables'][':payableId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.quotes[':quoteId'].finance.payables[':payableId'].$put(args, options),
  )
}

export async function deleteQuotesQuoteIdFinancePayablesPayableId(
  args: InferRequestType<
    (typeof client.quotes)[':quoteId']['finance']['payables'][':payableId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.quotes[':quoteId'].finance.payables[':payableId'].$delete(args, options),
  )
}

export async function postQuotesQuoteIdFinanceReceivables(
  args: InferRequestType<(typeof client.quotes)[':quoteId']['finance']['receivables']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotes[':quoteId'].finance.receivables.$post(args, options))
}

export async function putQuotesQuoteIdFinanceReceivablesReceivableId(
  args: InferRequestType<
    (typeof client.quotes)[':quoteId']['finance']['receivables'][':receivableId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.quotes[':quoteId'].finance.receivables[':receivableId'].$put(args, options),
  )
}

export async function deleteQuotesQuoteIdFinanceReceivablesReceivableId(
  args: InferRequestType<
    (typeof client.quotes)[':quoteId']['finance']['receivables'][':receivableId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.quotes[':quoteId'].finance.receivables[':receivableId'].$delete(args, options),
  )
}

export async function getQuotesQuoteIdInstructions(
  args: InferRequestType<(typeof client.quotes)[':quoteId']['instructions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotes[':quoteId'].instructions.$get(args, options))
}

export async function putQuotesQuoteIdInstructions(
  args: InferRequestType<(typeof client.quotes)[':quoteId']['instructions']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotes[':quoteId'].instructions.$put(args, options))
}

export async function postQuotesQuoteIdLanguageCombinations(
  args: InferRequestType<(typeof client.quotes)[':quoteId']['languageCombinations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotes[':quoteId'].languageCombinations.$post(args, options))
}

export async function postQuotesQuoteIdStart(
  args: InferRequestType<(typeof client.quotes)[':quoteId']['start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotes[':quoteId'].start.$post(args, options))
}

export async function postQuotesQuoteIdTasks(
  args: InferRequestType<(typeof client.quotes)[':quoteId']['tasks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotes[':quoteId'].tasks.$post(args, options))
}

export async function postReportsExportXml(
  args: InferRequestType<typeof client.reports.export.xml.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.export.xml.$post(args, options))
}

export async function postReportsImportXml(
  args: InferRequestType<typeof client.reports.import.xml.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.import.xml.$post(args, options))
}

export async function deleteReportsReportId(
  args: InferRequestType<(typeof client.reports)[':reportId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports[':reportId'].$delete(args, options))
}

export async function postReportsReportIdDuplicate(
  args: InferRequestType<(typeof client.reports)[':reportId']['duplicate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports[':reportId'].duplicate.$post(args, options))
}

export async function putReportsReportIdPreferred(
  args: InferRequestType<(typeof client.reports)[':reportId']['preferred']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports[':reportId'].preferred.$put(args, options))
}

export async function getReportsReportIdResultCsv(
  args: InferRequestType<(typeof client.reports)[':reportId']['result']['csv']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports[':reportId'].result.csv.$get(args, options))
}

export async function getReportsReportIdResultPrinterFriendly(
  args: InferRequestType<(typeof client.reports)[':reportId']['result']['printerFriendly']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports[':reportId'].result.printerFriendly.$get(args, options))
}

export async function getServicesActive(
  args: InferRequestType<typeof client.services.active.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.active.$get(args, options))
}

export async function getServicesAll(
  args: InferRequestType<typeof client.services.all.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.all.$get(args, options))
}

export async function getSubscription(options?: ClientRequestOptions) {
  return await parseResponse(client.subscription.$get(undefined, options))
}

export async function postSubscription(
  args: InferRequestType<typeof client.subscription.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscription.$post(args, options))
}

export async function getSubscriptionSupports(options?: ClientRequestOptions) {
  return await parseResponse(client.subscription.supports.$get(undefined, options))
}

export async function deleteSubscriptionSubscriptionId(
  args: InferRequestType<(typeof client.subscription)[':subscriptionId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscription[':subscriptionId'].$delete(args, options))
}

export async function deleteTasksTaskId(
  args: InferRequestType<(typeof client.tasks)[':taskId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':taskId'].$delete(args, options))
}

export async function putTasksTaskIdClientTaskPONumber(
  args: InferRequestType<(typeof client.tasks)[':taskId']['clientTaskPONumber']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':taskId'].clientTaskPONumber.$put(args, options))
}

export async function getTasksTaskIdContacts(
  args: InferRequestType<(typeof client.tasks)[':taskId']['contacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':taskId'].contacts.$get(args, options))
}

export async function putTasksTaskIdContacts(
  args: InferRequestType<(typeof client.tasks)[':taskId']['contacts']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':taskId'].contacts.$put(args, options))
}

export async function getTasksTaskIdCustomFields(
  args: InferRequestType<(typeof client.tasks)[':taskId']['customFields']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':taskId'].customFields.$get(args, options))
}

export async function putTasksTaskIdCustomFields(
  args: InferRequestType<(typeof client.tasks)[':taskId']['customFields']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':taskId'].customFields.$put(args, options))
}

export async function getTasksTaskIdDates(
  args: InferRequestType<(typeof client.tasks)[':taskId']['dates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':taskId'].dates.$get(args, options))
}

export async function putTasksTaskIdDates(
  args: InferRequestType<(typeof client.tasks)[':taskId']['dates']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':taskId'].dates.$put(args, options))
}

export async function getTasksTaskIdFiles(
  args: InferRequestType<(typeof client.tasks)[':taskId']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':taskId'].files.$get(args, options))
}

export async function postTasksTaskIdFilesInput(
  args: InferRequestType<(typeof client.tasks)[':taskId']['files']['input']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':taskId'].files.input.$post(args, options))
}

export async function getTasksTaskIdInstructions(
  args: InferRequestType<(typeof client.tasks)[':taskId']['instructions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':taskId'].instructions.$get(args, options))
}

export async function putTasksTaskIdInstructions(
  args: InferRequestType<(typeof client.tasks)[':taskId']['instructions']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':taskId'].instructions.$put(args, options))
}

export async function putTasksTaskIdName(
  args: InferRequestType<(typeof client.tasks)[':taskId']['name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':taskId'].name.$put(args, options))
}

export async function getTasksTaskIdProgress(
  args: InferRequestType<(typeof client.tasks)[':taskId']['progress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':taskId'].progress.$get(args, options))
}

export async function postTasksTaskIdStart(
  args: InferRequestType<(typeof client.tasks)[':taskId']['start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':taskId'].start.$post(args, options))
}

export async function getUsers(options?: ClientRequestOptions) {
  return await parseResponse(client.users.$get(undefined, options))
}

export async function getUsersMe(options?: ClientRequestOptions) {
  return await parseResponse(client.users.me.$get(undefined, options))
}

export async function getUsersMeTimeZone(options?: ClientRequestOptions) {
  return await parseResponse(client.users.me.timeZone.$get(undefined, options))
}

export async function getUsersUserId(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].$get(args, options))
}

export async function putUsersUserId(
  args: InferRequestType<(typeof client.users)[':userId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].$put(args, options))
}

export async function getUsersUserIdCustomFields(
  args: InferRequestType<(typeof client.users)[':userId']['customFields']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].customFields.$get(args, options))
}

export async function putUsersUserIdCustomFields(
  args: InferRequestType<(typeof client.users)[':userId']['customFields']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].customFields.$put(args, options))
}

export async function getUsersUserIdCustomFieldsCustomFieldKey(
  args: InferRequestType<
    (typeof client.users)[':userId']['customFields'][':customFieldKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':userId'].customFields[':customFieldKey'].$get(args, options),
  )
}

export async function putUsersUserIdCustomFieldsCustomFieldKey(
  args: InferRequestType<
    (typeof client.users)[':userId']['customFields'][':customFieldKey']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':userId'].customFields[':customFieldKey'].$put(args, options),
  )
}

export async function putUsersUserIdPassword(
  args: InferRequestType<(typeof client.users)[':userId']['password']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].password.$put(args, options))
}

export async function getV2JobsForExternalId(
  args: InferRequestType<(typeof client.v2.jobs)['for-external-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.jobs['for-external-id'].$get(args, options))
}

export async function getV2JobsJobId(
  args: InferRequestType<(typeof client.v2.jobs)[':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.jobs[':jobId'].$get(args, options))
}

export async function putV2JobsJobIdDates(
  args: InferRequestType<(typeof client.v2.jobs)[':jobId']['dates']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.jobs[':jobId'].dates.$put(args, options))
}

export async function postV2JobsJobIdFilesAddExternalLink(
  args: InferRequestType<(typeof client.v2.jobs)[':jobId']['files']['addExternalLink']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.jobs[':jobId'].files.addExternalLink.$post(args, options))
}

export async function getV2JobsJobIdFilesDelivered(
  args: InferRequestType<(typeof client.v2.jobs)[':jobId']['files']['delivered']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.jobs[':jobId'].files.delivered.$get(args, options))
}

export async function putV2JobsJobIdFilesDeliveredAdd(
  args: InferRequestType<(typeof client.v2.jobs)[':jobId']['files']['delivered']['add']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.jobs[':jobId'].files.delivered.add.$put(args, options))
}

export async function postV2JobsJobIdFilesDeliveredAddLink(
  args: InferRequestType<
    (typeof client.v2.jobs)[':jobId']['files']['delivered']['addLink']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.jobs[':jobId'].files.delivered.addLink.$post(args, options))
}

export async function postV2JobsJobIdFilesDeliveredUpload(
  args: InferRequestType<
    (typeof client.v2.jobs)[':jobId']['files']['delivered']['upload']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.jobs[':jobId'].files.delivered.upload.$post(args, options))
}

export async function getV2JobsJobIdFilesSharedReferenceFiles(
  args: InferRequestType<
    (typeof client.v2.jobs)[':jobId']['files']['sharedReferenceFiles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.jobs[':jobId'].files.sharedReferenceFiles.$get(args, options),
  )
}

export async function putV2JobsJobIdFilesSharedReferenceFilesShare(
  args: InferRequestType<
    (typeof client.v2.jobs)[':jobId']['files']['sharedReferenceFiles']['share']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.jobs[':jobId'].files.sharedReferenceFiles.share.$put(args, options),
  )
}

export async function getV2JobsJobIdFilesSharedWorkFiles(
  args: InferRequestType<(typeof client.v2.jobs)[':jobId']['files']['sharedWorkFiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.jobs[':jobId'].files.sharedWorkFiles.$get(args, options))
}

export async function putV2JobsJobIdFilesSharedWorkFilesShare(
  args: InferRequestType<
    (typeof client.v2.jobs)[':jobId']['files']['sharedWorkFiles']['share']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.jobs[':jobId'].files.sharedWorkFiles.share.$put(args, options),
  )
}

export async function putV2JobsJobIdFilesStopSharing(
  args: InferRequestType<(typeof client.v2.jobs)[':jobId']['files']['stopSharing']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.jobs[':jobId'].files.stopSharing.$put(args, options))
}

export async function putV2JobsJobIdInstructions(
  args: InferRequestType<(typeof client.v2.jobs)[':jobId']['instructions']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.jobs[':jobId'].instructions.$put(args, options))
}

export async function putV2JobsJobIdStatus(
  args: InferRequestType<(typeof client.v2.jobs)[':jobId']['status']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.jobs[':jobId'].status.$put(args, options))
}

export async function putV2JobsJobIdVendor(
  args: InferRequestType<(typeof client.v2.jobs)[':jobId']['vendor']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.jobs[':jobId'].vendor.$put(args, options))
}

export async function postV2Projects(
  args: InferRequestType<typeof client.v2.projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects.$post(args, options))
}

export async function postV2ProjectsFilesArchive(
  args: InferRequestType<typeof client.v2.projects.files.archive.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects.files.archive.$post(args, options))
}

export async function getV2ProjectsFilesFileId(
  args: InferRequestType<(typeof client.v2.projects.files)[':fileId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects.files[':fileId'].$get(args, options))
}

export async function getV2ProjectsFilesFileIdDownloadFileName(
  args: InferRequestType<
    (typeof client.v2.projects.files)[':fileId']['download'][':fileName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.projects.files[':fileId'].download[':fileName'].$get(args, options),
  )
}

export async function getV2ProjectsForExternalIdExternalProjectId(
  args: InferRequestType<
    (typeof client.v2.projects)['for-external-id'][':externalProjectId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.projects['for-external-id'][':externalProjectId'].$get(args, options),
  )
}

export async function getV2ProjectsProjectId(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects[':projectId'].$get(args, options))
}

export async function postV2ProjectsProjectIdAddJob(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['addJob']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects[':projectId'].addJob.$post(args, options))
}

export async function getV2ProjectsProjectIdCatToolProject(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['catToolProject']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects[':projectId'].catToolProject.$get(args, options))
}

export async function getV2ProjectsProjectIdClientContacts(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['clientContacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects[':projectId'].clientContacts.$get(args, options))
}

export async function putV2ProjectsProjectIdClientContacts(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['clientContacts']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects[':projectId'].clientContacts.$put(args, options))
}

export async function putV2ProjectsProjectIdClientDeadline(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['clientDeadline']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects[':projectId'].clientDeadline.$put(args, options))
}

export async function putV2ProjectsProjectIdClientNotes(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['clientNotes']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects[':projectId'].clientNotes.$put(args, options))
}

export async function putV2ProjectsProjectIdClientReferenceNumber(
  args: InferRequestType<
    (typeof client.v2.projects)[':projectId']['clientReferenceNumber']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.projects[':projectId'].clientReferenceNumber.$put(args, options),
  )
}

export async function getV2ProjectsProjectIdCustomFields(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['customFields']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects[':projectId'].customFields.$get(args, options))
}

export async function putV2ProjectsProjectIdCustomFieldsKey(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['customFields'][':key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.projects[':projectId'].customFields[':key'].$put(args, options),
  )
}

export async function getV2ProjectsProjectIdFiles(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects[':projectId'].files.$get(args, options))
}

export async function putV2ProjectsProjectIdFilesAdd(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['files']['add']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects[':projectId'].files.add.$put(args, options))
}

export async function postV2ProjectsProjectIdFilesAddExternalLink(
  args: InferRequestType<
    (typeof client.v2.projects)[':projectId']['files']['addExternalLink']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.projects[':projectId'].files.addExternalLink.$post(args, options),
  )
}

export async function postV2ProjectsProjectIdFilesAddLink(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['files']['addLink']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects[':projectId'].files.addLink.$post(args, options))
}

export async function getV2ProjectsProjectIdFilesDeliverable(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['files']['deliverable']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects[':projectId'].files.deliverable.$get(args, options))
}

export async function postV2ProjectsProjectIdFilesUpload(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['files']['upload']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects[':projectId'].files.upload.$post(args, options))
}

export async function getV2ProjectsProjectIdFinance(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['finance']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects[':projectId'].finance.$get(args, options))
}

export async function postV2ProjectsProjectIdFinancePayables(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['finance']['payables']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects[':projectId'].finance.payables.$post(args, options))
}

export async function putV2ProjectsProjectIdFinancePayablesPayableId(
  args: InferRequestType<
    (typeof client.v2.projects)[':projectId']['finance']['payables'][':payableId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.projects[':projectId'].finance.payables[':payableId'].$put(args, options),
  )
}

export async function deleteV2ProjectsProjectIdFinancePayablesPayableId(
  args: InferRequestType<
    (typeof client.v2.projects)[':projectId']['finance']['payables'][':payableId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.projects[':projectId'].finance.payables[':payableId'].$delete(args, options),
  )
}

export async function postV2ProjectsProjectIdFinanceReceivables(
  args: InferRequestType<
    (typeof client.v2.projects)[':projectId']['finance']['receivables']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.projects[':projectId'].finance.receivables.$post(args, options),
  )
}

export async function putV2ProjectsProjectIdFinanceReceivablesReceivableId(
  args: InferRequestType<
    (typeof client.v2.projects)[':projectId']['finance']['receivables'][':receivableId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.projects[':projectId'].finance.receivables[':receivableId'].$put(args, options),
  )
}

export async function deleteV2ProjectsProjectIdFinanceReceivablesReceivableId(
  args: InferRequestType<
    (typeof client.v2.projects)[':projectId']['finance']['receivables'][':receivableId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.projects[':projectId'].finance.receivables[':receivableId'].$delete(args, options),
  )
}

export async function putV2ProjectsProjectIdInternalNotes(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['internalNotes']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects[':projectId'].internalNotes.$put(args, options))
}

export async function getV2ProjectsProjectIdJobs(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects[':projectId'].jobs.$get(args, options))
}

export async function putV2ProjectsProjectIdOrderDate(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['orderDate']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects[':projectId'].orderDate.$put(args, options))
}

export async function getV2ProjectsProjectIdProcess(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['process']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects[':projectId'].process.$get(args, options))
}

export async function putV2ProjectsProjectIdSourceLanguage(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['sourceLanguage']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects[':projectId'].sourceLanguage.$put(args, options))
}

export async function putV2ProjectsProjectIdSpecialization(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['specialization']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects[':projectId'].specialization.$put(args, options))
}

export async function putV2ProjectsProjectIdStatus(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['status']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects[':projectId'].status.$put(args, options))
}

export async function putV2ProjectsProjectIdTargetLanguages(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['targetLanguages']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects[':projectId'].targetLanguages.$put(args, options))
}

export async function putV2ProjectsProjectIdVendorInstructions(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['vendorInstructions']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.projects[':projectId'].vendorInstructions.$put(args, options),
  )
}

export async function putV2ProjectsProjectIdVolume(
  args: InferRequestType<(typeof client.v2.projects)[':projectId']['volume']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects[':projectId'].volume.$put(args, options))
}

export async function postV2Quotes(
  args: InferRequestType<typeof client.v2.quotes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.quotes.$post(args, options))
}

export async function postV2QuotesFilesArchive(
  args: InferRequestType<typeof client.v2.quotes.files.archive.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.quotes.files.archive.$post(args, options))
}

export async function getV2QuotesFilesFileId(
  args: InferRequestType<(typeof client.v2.quotes.files)[':fileId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.quotes.files[':fileId'].$get(args, options))
}

export async function getV2QuotesFilesFileIdDownloadFileName(
  args: InferRequestType<
    (typeof client.v2.quotes.files)[':fileId']['download'][':fileName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.quotes.files[':fileId'].download[':fileName'].$get(args, options),
  )
}

export async function getV2QuotesQuoteId(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.quotes[':quoteId'].$get(args, options))
}

export async function putV2QuotesQuoteIdBusinessDays(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['businessDays']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.quotes[':quoteId'].businessDays.$put(args, options))
}

export async function getV2QuotesQuoteIdClientContacts(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['clientContacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.quotes[':quoteId'].clientContacts.$get(args, options))
}

export async function putV2QuotesQuoteIdClientContacts(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['clientContacts']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.quotes[':quoteId'].clientContacts.$put(args, options))
}

export async function putV2QuotesQuoteIdClientNotes(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['clientNotes']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.quotes[':quoteId'].clientNotes.$put(args, options))
}

export async function putV2QuotesQuoteIdClientReferenceNumber(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['clientReferenceNumber']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.quotes[':quoteId'].clientReferenceNumber.$put(args, options))
}

export async function getV2QuotesQuoteIdCustomFields(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['customFields']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.quotes[':quoteId'].customFields.$get(args, options))
}

export async function putV2QuotesQuoteIdCustomFieldsKey(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['customFields'][':key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.quotes[':quoteId'].customFields[':key'].$put(args, options))
}

export async function putV2QuotesQuoteIdExpectedDeliveryDate(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['expectedDeliveryDate']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.quotes[':quoteId'].expectedDeliveryDate.$put(args, options))
}

export async function getV2QuotesQuoteIdFiles(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.quotes[':quoteId'].files.$get(args, options))
}

export async function putV2QuotesQuoteIdFilesAdd(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['files']['add']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.quotes[':quoteId'].files.add.$put(args, options))
}

export async function postV2QuotesQuoteIdFilesUpload(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['files']['upload']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.quotes[':quoteId'].files.upload.$post(args, options))
}

export async function getV2QuotesQuoteIdFinance(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['finance']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.quotes[':quoteId'].finance.$get(args, options))
}

export async function postV2QuotesQuoteIdFinancePayables(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['finance']['payables']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.quotes[':quoteId'].finance.payables.$post(args, options))
}

export async function putV2QuotesQuoteIdFinancePayablesPayableId(
  args: InferRequestType<
    (typeof client.v2.quotes)[':quoteId']['finance']['payables'][':payableId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.quotes[':quoteId'].finance.payables[':payableId'].$put(args, options),
  )
}

export async function deleteV2QuotesQuoteIdFinancePayablesPayableId(
  args: InferRequestType<
    (typeof client.v2.quotes)[':quoteId']['finance']['payables'][':payableId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.quotes[':quoteId'].finance.payables[':payableId'].$delete(args, options),
  )
}

export async function postV2QuotesQuoteIdFinanceReceivables(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['finance']['receivables']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.quotes[':quoteId'].finance.receivables.$post(args, options))
}

export async function putV2QuotesQuoteIdFinanceReceivablesReceivableId(
  args: InferRequestType<
    (typeof client.v2.quotes)[':quoteId']['finance']['receivables'][':receivableId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.quotes[':quoteId'].finance.receivables[':receivableId'].$put(args, options),
  )
}

export async function deleteV2QuotesQuoteIdFinanceReceivablesReceivableId(
  args: InferRequestType<
    (typeof client.v2.quotes)[':quoteId']['finance']['receivables'][':receivableId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.quotes[':quoteId'].finance.receivables[':receivableId'].$delete(args, options),
  )
}

export async function putV2QuotesQuoteIdInternalNotes(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['internalNotes']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.quotes[':quoteId'].internalNotes.$put(args, options))
}

export async function getV2QuotesQuoteIdJobs(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.quotes[':quoteId'].jobs.$get(args, options))
}

export async function putV2QuotesQuoteIdQuoteExpiry(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['quoteExpiry']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.quotes[':quoteId'].quoteExpiry.$put(args, options))
}

export async function putV2QuotesQuoteIdSourceLanguage(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['sourceLanguage']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.quotes[':quoteId'].sourceLanguage.$put(args, options))
}

export async function putV2QuotesQuoteIdSpecialization(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['specialization']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.quotes[':quoteId'].specialization.$put(args, options))
}

export async function putV2QuotesQuoteIdStatus(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['status']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.quotes[':quoteId'].status.$put(args, options))
}

export async function putV2QuotesQuoteIdTargetLanguages(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['targetLanguages']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.quotes[':quoteId'].targetLanguages.$put(args, options))
}

export async function putV2QuotesQuoteIdVendorInstructions(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['vendorInstructions']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.quotes[':quoteId'].vendorInstructions.$put(args, options))
}

export async function putV2QuotesQuoteIdVolume(
  args: InferRequestType<(typeof client.v2.quotes)[':quoteId']['volume']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.quotes[':quoteId'].volume.$put(args, options))
}
