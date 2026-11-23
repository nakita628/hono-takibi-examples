import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getConsumerV1Appointments(
  args: InferRequestType<typeof client.consumer.v1.appointments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumer.v1.appointments.$get(args, options))
}

export async function postConsumerV1Appointments(
  args: InferRequestType<typeof client.consumer.v1.appointments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumer.v1.appointments.$post(args, options))
}

export async function getConsumerV1AppointmentsBookingfields(
  args: InferRequestType<typeof client.consumer.v1.appointments.bookingfields.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumer.v1.appointments.bookingfields.$get(args, options))
}

export async function getConsumerV1AppointmentsCustomfields(
  args: InferRequestType<typeof client.consumer.v1.appointments.customfields.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumer.v1.appointments.customfields.$get(args, options))
}

export async function getConsumerV1AppointmentsId(
  args: InferRequestType<(typeof client.consumer.v1.appointments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumer.v1.appointments[':id'].$get(args, options))
}

export async function deleteConsumerV1AppointmentsId(
  args: InferRequestType<(typeof client.consumer.v1.appointments)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumer.v1.appointments[':id'].$delete(args, options))
}

export async function putConsumerV1AppointmentsIdBook(
  args: InferRequestType<(typeof client.consumer.v1.appointments)[':id']['book']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumer.v1.appointments[':id'].book.$put(args, options))
}

export async function putConsumerV1AppointmentsIdCancel(
  args: InferRequestType<(typeof client.consumer.v1.appointments)[':id']['cancel']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumer.v1.appointments[':id'].cancel.$put(args, options))
}

export async function putConsumerV1AppointmentsIdConfirm(
  args: InferRequestType<(typeof client.consumer.v1.appointments)[':id']['confirm']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumer.v1.appointments[':id'].confirm.$put(args, options))
}

export async function putConsumerV1AppointmentsIdNoshow(
  args: InferRequestType<(typeof client.consumer.v1.appointments)[':id']['noshow']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumer.v1.appointments[':id'].noshow.$put(args, options))
}

export async function putConsumerV1AppointmentsIdReschedule(
  args: InferRequestType<(typeof client.consumer.v1.appointments)[':id']['reschedule']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumer.v1.appointments[':id'].reschedule.$put(args, options))
}

export async function putConsumerV1AppointmentsIdReserve(
  args: InferRequestType<(typeof client.consumer.v1.appointments)[':id']['reserve']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumer.v1.appointments[':id'].reserve.$put(args, options))
}

export async function getConsumerV1AvailabilityServiceIdStartDateEndDate(
  args: InferRequestType<
    (typeof client.consumer.v1.availability)[':serviceId'][':startDate'][':endDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.consumer.v1.availability[':serviceId'][':startDate'][':endDate'].$get(args, options),
  )
}

export async function getConsumerV1AvailabilityServiceIdStartDateEndDateDays(
  args: InferRequestType<
    (typeof client.consumer.v1.availability)[':serviceId'][':startDate'][':endDate']['days']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.consumer.v1.availability[':serviceId'][':startDate'][':endDate'].days.$get(
      args,
      options,
    ),
  )
}

export async function getConsumerV1AvailabilityServiceIdStartDateEndDateUnavailable(
  args: InferRequestType<
    (typeof client.consumer.v1.availability)[':serviceId'][':startDate'][':endDate']['unavailable']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.consumer.v1.availability[':serviceId'][':startDate'][':endDate'].unavailable.$get(
      args,
      options,
    ),
  )
}

export async function getConsumerV1Customers(
  args: InferRequestType<typeof client.consumer.v1.customers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumer.v1.customers.$get(args, options))
}

export async function postConsumerV1Customers(
  args: InferRequestType<typeof client.consumer.v1.customers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumer.v1.customers.$post(args, options))
}

export async function getConsumerV1CustomersBookingfields(
  args: InferRequestType<typeof client.consumer.v1.customers.bookingfields.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumer.v1.customers.bookingfields.$get(args, options))
}

export async function getConsumerV1CustomersCountries(options?: ClientRequestOptions) {
  return await parseResponse(client.consumer.v1.customers.countries.$get(undefined, options))
}

export async function getConsumerV1CustomersCustomfields(
  args: InferRequestType<typeof client.consumer.v1.customers.customfields.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumer.v1.customers.customfields.$get(args, options))
}

export async function getConsumerV1CustomersStates(
  args: InferRequestType<typeof client.consumer.v1.customers.states.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumer.v1.customers.states.$get(args, options))
}

export async function getConsumerV1CustomersId(
  args: InferRequestType<(typeof client.consumer.v1.customers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumer.v1.customers[':id'].$get(args, options))
}

export async function putConsumerV1CustomersId(
  args: InferRequestType<(typeof client.consumer.v1.customers)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumer.v1.customers[':id'].$put(args, options))
}

export async function deleteConsumerV1CustomersId(
  args: InferRequestType<(typeof client.consumer.v1.customers)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumer.v1.customers[':id'].$delete(args, options))
}

export async function getConsumerV1Locations(
  args: InferRequestType<typeof client.consumer.v1.locations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumer.v1.locations.$get(args, options))
}

export async function getConsumerV1LocationsId(
  args: InferRequestType<(typeof client.consumer.v1.locations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumer.v1.locations[':id'].$get(args, options))
}

export async function getConsumerV1Resourcegroups(
  args: InferRequestType<typeof client.consumer.v1.resourcegroups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumer.v1.resourcegroups.$get(args, options))
}

export async function getConsumerV1ResourcegroupsId(
  args: InferRequestType<(typeof client.consumer.v1.resourcegroups)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumer.v1.resourcegroups[':id'].$get(args, options))
}

export async function getConsumerV1Resources(
  args: InferRequestType<typeof client.consumer.v1.resources.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumer.v1.resources.$get(args, options))
}

export async function getConsumerV1ResourcesId(
  args: InferRequestType<(typeof client.consumer.v1.resources)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumer.v1.resources[':id'].$get(args, options))
}

export async function getConsumerV1ResourcesIdServices(
  args: InferRequestType<(typeof client.consumer.v1.resources)[':id']['services']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumer.v1.resources[':id'].services.$get(args, options))
}

export async function getConsumerV1Servicegroups(
  args: InferRequestType<typeof client.consumer.v1.servicegroups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumer.v1.servicegroups.$get(args, options))
}

export async function getConsumerV1ServicegroupsId(
  args: InferRequestType<(typeof client.consumer.v1.servicegroups)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumer.v1.servicegroups[':id'].$get(args, options))
}

export async function getConsumerV1Services(
  args: InferRequestType<typeof client.consumer.v1.services.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumer.v1.services.$get(args, options))
}

export async function getConsumerV1ServicesAllocationsId(
  args: InferRequestType<(typeof client.consumer.v1.services.allocations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumer.v1.services.allocations[':id'].$get(args, options))
}

export async function getConsumerV1ServicesId(
  args: InferRequestType<(typeof client.consumer.v1.services)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumer.v1.services[':id'].$get(args, options))
}

export async function getConsumerV1ServicesIdAllocations(
  args: InferRequestType<(typeof client.consumer.v1.services)[':id']['allocations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumer.v1.services[':id'].allocations.$get(args, options))
}

export async function getConsumerV1ServicesIdResources(
  args: InferRequestType<(typeof client.consumer.v1.services)[':id']['resources']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumer.v1.services[':id'].resources.$get(args, options))
}
