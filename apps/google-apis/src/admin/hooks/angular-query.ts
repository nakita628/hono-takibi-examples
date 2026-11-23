import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAdminKey() {
  return ['admin'] as const
}

export function getAdminDirectoryV1CustomerCustomerIdDevicesChromeosQueryKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/customer/:customerId/devices/chromeos', args] as const
}

export function getAdminDirectoryV1CustomerCustomerIdDevicesChromeosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDirectoryV1CustomerCustomerIdDevicesChromeosQueryKey>
  >({
    queryKey: getAdminDirectoryV1CustomerCustomerIdDevicesChromeosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1.customer[':customerId'].devices.chromeos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminDirectoryV1CustomerCustomerIdDevicesChromeos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminDirectoryV1CustomerCustomerIdDevicesChromeosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1CustomerCustomerIdDevicesChromeosQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdminDirectoryV1CustomerCustomerIdDevicesChromeosMoveDevicesToOuMutationKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customerId/devices/chromeos/moveDevicesToOu',
    'POST',
  ] as const
}

export function getPostAdminDirectoryV1CustomerCustomerIdDevicesChromeosMoveDevicesToOuMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos']['moveDevicesToOu']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos']['moveDevicesToOu']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAdminDirectoryV1CustomerCustomerIdDevicesChromeosMoveDevicesToOuMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos']['moveDevicesToOu']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.customer[':customerId'].devices.chromeos.moveDevicesToOu.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostAdminDirectoryV1CustomerCustomerIdDevicesChromeosMoveDevicesToOu<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos']['moveDevicesToOu']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos']['moveDevicesToOu']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAdminDirectoryV1CustomerCustomerIdDevicesChromeosMoveDevicesToOuMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdQueryKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId']['$get']
  >,
) {
  return [
    'admin',
    '/admin/directory/v1/customer/:customerId/devices/chromeos/:deviceId',
    args,
  ] as const
}

export function getAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdQueryKey>
  >({
    queryKey: getAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1.customer[':customerId'].devices.chromeos[':deviceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdMutationKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customerId/devices/chromeos/:deviceId',
    'PUT',
  ] as const
}

export function getPutAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId']['$put']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.customer[':customerId'].devices.chromeos[':deviceId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdMutationKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customerId/devices/chromeos/:deviceId',
    'PATCH',
  ] as const
}

export function getPatchAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId']['$patch']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.customer[':customerId'].devices.chromeos[':deviceId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPatchAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdCommandsCommandIdQueryKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId']['commands'][':commandId']['$get']
  >,
) {
  return [
    'admin',
    '/admin/directory/v1/customer/:customerId/devices/chromeos/:deviceId/commands/:commandId',
    args,
  ] as const
}

export function getAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdCommandsCommandIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId']['commands'][':commandId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId']['commands'][':commandId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId']['commands'][':commandId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdCommandsCommandIdQueryKey
    >
  >({
    queryKey:
      getAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdCommandsCommandIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1.customer[':customerId'].devices.chromeos[':deviceId'].commands[
          ':commandId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdCommandsCommandId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId']['commands'][':commandId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId']['commands'][':commandId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId']['commands'][':commandId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdCommandsCommandIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdCommandsCommandIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdIssueCommandMutationKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customerId/devices/chromeos/:deviceId:issueCommand',
    'POST',
  ] as const
}

export function getPostAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdIssueCommandMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId:issueCommand']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId:issueCommand']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdIssueCommandMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId:issueCommand']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.customer[':customerId'].devices.chromeos[
          ':deviceId:issueCommand'
        ].$post(args, options),
      )
    },
  })
}

export function injectPostAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdIssueCommand<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId:issueCommand']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId:issueCommand']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdIssueCommandMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdminDirectoryV1CustomerCustomerIdDevicesChromeosResourceIdActionMutationKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customerId/devices/chromeos/:resourceId/action',
    'POST',
  ] as const
}

export function getPostAdminDirectoryV1CustomerCustomerIdDevicesChromeosResourceIdActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':resourceId']['action']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':resourceId']['action']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAdminDirectoryV1CustomerCustomerIdDevicesChromeosResourceIdActionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':resourceId']['action']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.customer[':customerId'].devices.chromeos[
          ':resourceId'
        ].action.$post(args, options),
      )
    },
  })
}

export function injectPostAdminDirectoryV1CustomerCustomerIdDevicesChromeosResourceIdAction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':resourceId']['action']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':resourceId']['action']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAdminDirectoryV1CustomerCustomerIdDevicesChromeosResourceIdActionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdminDirectoryV1CustomerCustomerIdDevicesChromeosBatchChangeStatusMutationKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customerId/devices/chromeos:batchChangeStatus',
    'POST',
  ] as const
}

export function getPostAdminDirectoryV1CustomerCustomerIdDevicesChromeosBatchChangeStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos:batchChangeStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos:batchChangeStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAdminDirectoryV1CustomerCustomerIdDevicesChromeosBatchChangeStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos:batchChangeStatus']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.customer[':customerId'].devices[
          'chromeos:batchChangeStatus'
        ].$post(args, options),
      )
    },
  })
}

export function injectPostAdminDirectoryV1CustomerCustomerIdDevicesChromeosBatchChangeStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos:batchChangeStatus']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos:batchChangeStatus']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAdminDirectoryV1CustomerCustomerIdDevicesChromeosBatchChangeStatusMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminDirectoryV1CustomerCustomerIdDevicesMobileQueryKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['devices']['mobile']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/customer/:customerId/devices/mobile', args] as const
}

export function getAdminDirectoryV1CustomerCustomerIdDevicesMobileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.customer)[':customerId']['devices']['mobile']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['devices']['mobile']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customerId']['devices']['mobile']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDirectoryV1CustomerCustomerIdDevicesMobileQueryKey>
  >({
    queryKey: getAdminDirectoryV1CustomerCustomerIdDevicesMobileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1.customer[':customerId'].devices.mobile.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminDirectoryV1CustomerCustomerIdDevicesMobile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.customer)[':customerId']['devices']['mobile']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['devices']['mobile']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customerId']['devices']['mobile']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminDirectoryV1CustomerCustomerIdDevicesMobileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1CustomerCustomerIdDevicesMobileQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdQueryKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['devices']['mobile'][':resourceId']['$get']
  >,
) {
  return [
    'admin',
    '/admin/directory/v1/customer/:customerId/devices/mobile/:resourceId',
    args,
  ] as const
}

export function getAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.customer)[':customerId']['devices']['mobile'][':resourceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['devices']['mobile'][':resourceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customerId']['devices']['mobile'][':resourceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdQueryKey>
  >({
    queryKey: getAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1.customer[':customerId'].devices.mobile[':resourceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.customer)[':customerId']['devices']['mobile'][':resourceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['devices']['mobile'][':resourceId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customerId']['devices']['mobile'][':resourceId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdMutationKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customerId/devices/mobile/:resourceId',
    'DELETE',
  ] as const
}

export function getDeleteAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customerId']['devices']['mobile'][':resourceId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customerId']['devices']['mobile'][':resourceId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.customer)[':customerId']['devices']['mobile'][':resourceId']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.customer[':customerId'].devices.mobile[':resourceId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customerId']['devices']['mobile'][':resourceId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.customer)[':customerId']['devices']['mobile'][':resourceId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdActionMutationKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customerId/devices/mobile/:resourceId/action',
    'POST',
  ] as const
}

export function getPostAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customerId']['devices']['mobile'][':resourceId']['action']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customerId']['devices']['mobile'][':resourceId']['action']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdActionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.customer)[':customerId']['devices']['mobile'][':resourceId']['action']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.customer[':customerId'].devices.mobile[
          ':resourceId'
        ].action.$post(args, options),
      )
    },
  })
}

export function injectPostAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdAction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customerId']['devices']['mobile'][':resourceId']['action']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.customer)[':customerId']['devices']['mobile'][':resourceId']['action']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdActionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminDirectoryV1CustomerCustomerIdOrgunitsQueryKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['orgunits']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/customer/:customerId/orgunits', args] as const
}

export function getAdminDirectoryV1CustomerCustomerIdOrgunitsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.admin.directory.v1.customer)[':customerId']['orgunits']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['orgunits']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customerId']['orgunits']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDirectoryV1CustomerCustomerIdOrgunitsQueryKey>
  >({
    queryKey: getAdminDirectoryV1CustomerCustomerIdOrgunitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1.customer[':customerId'].orgunits.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminDirectoryV1CustomerCustomerIdOrgunits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.admin.directory.v1.customer)[':customerId']['orgunits']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['orgunits']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customerId']['orgunits']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminDirectoryV1CustomerCustomerIdOrgunitsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1CustomerCustomerIdOrgunitsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdminDirectoryV1CustomerCustomerIdOrgunitsMutationKey() {
  return ['admin', '/admin/directory/v1/customer/:customerId/orgunits', 'POST'] as const
}

export function getPostAdminDirectoryV1CustomerCustomerIdOrgunitsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customerId']['orgunits']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customerId']['orgunits']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDirectoryV1CustomerCustomerIdOrgunitsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.customer)[':customerId']['orgunits']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.customer[':customerId'].orgunits.$post(args, options),
      )
    },
  })
}

export function injectPostAdminDirectoryV1CustomerCustomerIdOrgunits<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customerId']['orgunits']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.customer)[':customerId']['orgunits']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminDirectoryV1CustomerCustomerIdOrgunitsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathQueryKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['orgunits'][':orgUnitPath']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/customer/:customerId/orgunits/:orgUnitPath', args] as const
}

export function getAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.customer)[':customerId']['orgunits'][':orgUnitPath']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['orgunits'][':orgUnitPath']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customerId']['orgunits'][':orgUnitPath']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathQueryKey>
  >({
    queryKey: getAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1.customer[':customerId'].orgunits[':orgUnitPath'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.customer)[':customerId']['orgunits'][':orgUnitPath']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['orgunits'][':orgUnitPath']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customerId']['orgunits'][':orgUnitPath']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathMutationKey() {
  return ['admin', '/admin/directory/v1/customer/:customerId/orgunits/:orgUnitPath', 'PUT'] as const
}

export function getPutAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customerId']['orgunits'][':orgUnitPath']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customerId']['orgunits'][':orgUnitPath']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.customer)[':customerId']['orgunits'][':orgUnitPath']['$put']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.customer[':customerId'].orgunits[':orgUnitPath'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPath<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customerId']['orgunits'][':orgUnitPath']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.customer)[':customerId']['orgunits'][':orgUnitPath']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathMutationKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customerId/orgunits/:orgUnitPath',
    'DELETE',
  ] as const
}

export function getDeleteAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customerId']['orgunits'][':orgUnitPath']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customerId']['orgunits'][':orgUnitPath']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.customer)[':customerId']['orgunits'][':orgUnitPath']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.customer[':customerId'].orgunits[':orgUnitPath'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPath<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customerId']['orgunits'][':orgUnitPath']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.customer)[':customerId']['orgunits'][':orgUnitPath']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathMutationKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customerId/orgunits/:orgUnitPath',
    'PATCH',
  ] as const
}

export function getPatchAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customerId']['orgunits'][':orgUnitPath']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customerId']['orgunits'][':orgUnitPath']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.customer)[':customerId']['orgunits'][':orgUnitPath']['$patch']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.customer[':customerId'].orgunits[':orgUnitPath'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPatchAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPath<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customerId']['orgunits'][':orgUnitPath']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.customer)[':customerId']['orgunits'][':orgUnitPath']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminDirectoryV1CustomerCustomerIdSchemasQueryKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['schemas']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/customer/:customerId/schemas', args] as const
}

export function getAdminDirectoryV1CustomerCustomerIdSchemasQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.admin.directory.v1.customer)[':customerId']['schemas']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['schemas']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customerId']['schemas']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDirectoryV1CustomerCustomerIdSchemasQueryKey>
  >({
    queryKey: getAdminDirectoryV1CustomerCustomerIdSchemasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1.customer[':customerId'].schemas.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminDirectoryV1CustomerCustomerIdSchemas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.admin.directory.v1.customer)[':customerId']['schemas']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['schemas']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customerId']['schemas']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminDirectoryV1CustomerCustomerIdSchemasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1CustomerCustomerIdSchemasQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdminDirectoryV1CustomerCustomerIdSchemasMutationKey() {
  return ['admin', '/admin/directory/v1/customer/:customerId/schemas', 'POST'] as const
}

export function getPostAdminDirectoryV1CustomerCustomerIdSchemasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customerId']['schemas']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customerId']['schemas']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDirectoryV1CustomerCustomerIdSchemasMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.customer)[':customerId']['schemas']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.customer[':customerId'].schemas.$post(args, options),
      )
    },
  })
}

export function injectPostAdminDirectoryV1CustomerCustomerIdSchemas<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customerId']['schemas']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.customer)[':customerId']['schemas']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminDirectoryV1CustomerCustomerIdSchemasMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyQueryKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['schemas'][':schemaKey']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/customer/:customerId/schemas/:schemaKey', args] as const
}

export function getAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.customer)[':customerId']['schemas'][':schemaKey']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['schemas'][':schemaKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customerId']['schemas'][':schemaKey']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyQueryKey>
  >({
    queryKey: getAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1.customer[':customerId'].schemas[':schemaKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminDirectoryV1CustomerCustomerIdSchemasSchemaKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.customer)[':customerId']['schemas'][':schemaKey']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['schemas'][':schemaKey']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customerId']['schemas'][':schemaKey']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyMutationKey() {
  return ['admin', '/admin/directory/v1/customer/:customerId/schemas/:schemaKey', 'PUT'] as const
}

export function getPutAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customerId']['schemas'][':schemaKey']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customerId']['schemas'][':schemaKey']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.customer)[':customerId']['schemas'][':schemaKey']['$put']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.customer[':customerId'].schemas[':schemaKey'].$put(args, options),
      )
    },
  })
}

export function injectPutAdminDirectoryV1CustomerCustomerIdSchemasSchemaKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customerId']['schemas'][':schemaKey']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.customer)[':customerId']['schemas'][':schemaKey']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyMutationKey() {
  return ['admin', '/admin/directory/v1/customer/:customerId/schemas/:schemaKey', 'DELETE'] as const
}

export function getDeleteAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customerId']['schemas'][':schemaKey']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customerId']['schemas'][':schemaKey']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.customer)[':customerId']['schemas'][':schemaKey']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.customer[':customerId'].schemas[':schemaKey'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteAdminDirectoryV1CustomerCustomerIdSchemasSchemaKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customerId']['schemas'][':schemaKey']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.customer)[':customerId']['schemas'][':schemaKey']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyMutationKey() {
  return ['admin', '/admin/directory/v1/customer/:customerId/schemas/:schemaKey', 'PATCH'] as const
}

export function getPatchAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customerId']['schemas'][':schemaKey']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customerId']['schemas'][':schemaKey']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.customer)[':customerId']['schemas'][':schemaKey']['$patch']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.customer[':customerId'].schemas[':schemaKey'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPatchAdminDirectoryV1CustomerCustomerIdSchemasSchemaKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customerId']['schemas'][':schemaKey']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.customer)[':customerId']['schemas'][':schemaKey']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminDirectoryV1CustomerCustomerDomainaliasesQueryKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['domainaliases']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/customer/:customer/domainaliases', args] as const
}

export function getAdminDirectoryV1CustomerCustomerDomainaliasesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.customer)[':customer']['domainaliases']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['domainaliases']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customer']['domainaliases']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDirectoryV1CustomerCustomerDomainaliasesQueryKey>
  >({
    queryKey: getAdminDirectoryV1CustomerCustomerDomainaliasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1.customer[':customer'].domainaliases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminDirectoryV1CustomerCustomerDomainaliases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.customer)[':customer']['domainaliases']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['domainaliases']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customer']['domainaliases']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminDirectoryV1CustomerCustomerDomainaliasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1CustomerCustomerDomainaliasesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdminDirectoryV1CustomerCustomerDomainaliasesMutationKey() {
  return ['admin', '/admin/directory/v1/customer/:customer/domainaliases', 'POST'] as const
}

export function getPostAdminDirectoryV1CustomerCustomerDomainaliasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customer']['domainaliases']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customer']['domainaliases']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDirectoryV1CustomerCustomerDomainaliasesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.customer)[':customer']['domainaliases']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.customer[':customer'].domainaliases.$post(args, options),
      )
    },
  })
}

export function injectPostAdminDirectoryV1CustomerCustomerDomainaliases<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customer']['domainaliases']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.customer)[':customer']['domainaliases']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminDirectoryV1CustomerCustomerDomainaliasesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminDirectoryV1CustomerCustomerDomainaliasesDomainAliasNameQueryKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['domainaliases'][':domainAliasName']['$get']
  >,
) {
  return [
    'admin',
    '/admin/directory/v1/customer/:customer/domainaliases/:domainAliasName',
    args,
  ] as const
}

export function getAdminDirectoryV1CustomerCustomerDomainaliasesDomainAliasNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.customer)[':customer']['domainaliases'][':domainAliasName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['domainaliases'][':domainAliasName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customer']['domainaliases'][':domainAliasName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDirectoryV1CustomerCustomerDomainaliasesDomainAliasNameQueryKey>
  >({
    queryKey: getAdminDirectoryV1CustomerCustomerDomainaliasesDomainAliasNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1.customer[':customer'].domainaliases[':domainAliasName'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectAdminDirectoryV1CustomerCustomerDomainaliasesDomainAliasName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.customer)[':customer']['domainaliases'][':domainAliasName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['domainaliases'][':domainAliasName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customer']['domainaliases'][':domainAliasName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminDirectoryV1CustomerCustomerDomainaliasesDomainAliasNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1CustomerCustomerDomainaliasesDomainAliasNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteAdminDirectoryV1CustomerCustomerDomainaliasesDomainAliasNameMutationKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customer/domainaliases/:domainAliasName',
    'DELETE',
  ] as const
}

export function getDeleteAdminDirectoryV1CustomerCustomerDomainaliasesDomainAliasNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customer']['domainaliases'][':domainAliasName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customer']['domainaliases'][':domainAliasName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminDirectoryV1CustomerCustomerDomainaliasesDomainAliasNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.customer)[':customer']['domainaliases'][':domainAliasName']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.customer[':customer'].domainaliases[':domainAliasName'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteAdminDirectoryV1CustomerCustomerDomainaliasesDomainAliasName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customer']['domainaliases'][':domainAliasName']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.customer)[':customer']['domainaliases'][':domainAliasName']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteAdminDirectoryV1CustomerCustomerDomainaliasesDomainAliasNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminDirectoryV1CustomerCustomerDomainsQueryKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['domains']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/customer/:customer/domains', args] as const
}

export function getAdminDirectoryV1CustomerCustomerDomainsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.admin.directory.v1.customer)[':customer']['domains']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['domains']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.directory.v1.customer)[':customer']['domains']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDirectoryV1CustomerCustomerDomainsQueryKey>
  >({
    queryKey: getAdminDirectoryV1CustomerCustomerDomainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1.customer[':customer'].domains.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminDirectoryV1CustomerCustomerDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.admin.directory.v1.customer)[':customer']['domains']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['domains']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customer']['domains']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminDirectoryV1CustomerCustomerDomainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1CustomerCustomerDomainsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdminDirectoryV1CustomerCustomerDomainsMutationKey() {
  return ['admin', '/admin/directory/v1/customer/:customer/domains', 'POST'] as const
}

export function getPostAdminDirectoryV1CustomerCustomerDomainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.directory.v1.customer)[':customer']['domains']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.directory.v1.customer)[':customer']['domains']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDirectoryV1CustomerCustomerDomainsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.customer)[':customer']['domains']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.customer[':customer'].domains.$post(args, options),
      )
    },
  })
}

export function injectPostAdminDirectoryV1CustomerCustomerDomains<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customer']['domains']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.customer)[':customer']['domains']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminDirectoryV1CustomerCustomerDomainsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminDirectoryV1CustomerCustomerDomainsDomainNameQueryKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['domains'][':domainName']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/customer/:customer/domains/:domainName', args] as const
}

export function getAdminDirectoryV1CustomerCustomerDomainsDomainNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.customer)[':customer']['domains'][':domainName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['domains'][':domainName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customer']['domains'][':domainName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDirectoryV1CustomerCustomerDomainsDomainNameQueryKey>
  >({
    queryKey: getAdminDirectoryV1CustomerCustomerDomainsDomainNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1.customer[':customer'].domains[':domainName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminDirectoryV1CustomerCustomerDomainsDomainName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.customer)[':customer']['domains'][':domainName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['domains'][':domainName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customer']['domains'][':domainName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminDirectoryV1CustomerCustomerDomainsDomainNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1CustomerCustomerDomainsDomainNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteAdminDirectoryV1CustomerCustomerDomainsDomainNameMutationKey() {
  return ['admin', '/admin/directory/v1/customer/:customer/domains/:domainName', 'DELETE'] as const
}

export function getDeleteAdminDirectoryV1CustomerCustomerDomainsDomainNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customer']['domains'][':domainName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customer']['domains'][':domainName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminDirectoryV1CustomerCustomerDomainsDomainNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.customer)[':customer']['domains'][':domainName']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.customer[':customer'].domains[':domainName'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteAdminDirectoryV1CustomerCustomerDomainsDomainName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customer']['domains'][':domainName']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.customer)[':customer']['domains'][':domainName']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteAdminDirectoryV1CustomerCustomerDomainsDomainNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminDirectoryV1CustomerCustomerResourcesBuildingsQueryKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/customer/:customer/resources/buildings', args] as const
}

export function getAdminDirectoryV1CustomerCustomerResourcesBuildingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDirectoryV1CustomerCustomerResourcesBuildingsQueryKey>
  >({
    queryKey: getAdminDirectoryV1CustomerCustomerResourcesBuildingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1.customer[':customer'].resources.buildings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminDirectoryV1CustomerCustomerResourcesBuildings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminDirectoryV1CustomerCustomerResourcesBuildingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1CustomerCustomerResourcesBuildingsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdminDirectoryV1CustomerCustomerResourcesBuildingsMutationKey() {
  return ['admin', '/admin/directory/v1/customer/:customer/resources/buildings', 'POST'] as const
}

export function getPostAdminDirectoryV1CustomerCustomerResourcesBuildingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDirectoryV1CustomerCustomerResourcesBuildingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.customer[':customer'].resources.buildings.$post(args, options),
      )
    },
  })
}

export function injectPostAdminDirectoryV1CustomerCustomerResourcesBuildings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAdminDirectoryV1CustomerCustomerResourcesBuildingsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdQueryKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings'][':buildingId']['$get']
  >,
) {
  return [
    'admin',
    '/admin/directory/v1/customer/:customer/resources/buildings/:buildingId',
    args,
  ] as const
}

export function getAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings'][':buildingId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings'][':buildingId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings'][':buildingId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdQueryKey>
  >({
    queryKey: getAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1.customer[':customer'].resources.buildings[':buildingId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings'][':buildingId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings'][':buildingId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings'][':buildingId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdMutationKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customer/resources/buildings/:buildingId',
    'PUT',
  ] as const
}

export function getPutAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings'][':buildingId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings'][':buildingId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings'][':buildingId']['$put']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.customer[':customer'].resources.buildings[':buildingId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings'][':buildingId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings'][':buildingId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdMutationKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customer/resources/buildings/:buildingId',
    'DELETE',
  ] as const
}

export function getDeleteAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings'][':buildingId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings'][':buildingId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings'][':buildingId']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.customer[':customer'].resources.buildings[':buildingId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings'][':buildingId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings'][':buildingId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdMutationKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customer/resources/buildings/:buildingId',
    'PATCH',
  ] as const
}

export function getPatchAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings'][':buildingId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings'][':buildingId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings'][':buildingId']['$patch']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.customer[':customer'].resources.buildings[':buildingId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPatchAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings'][':buildingId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings'][':buildingId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminDirectoryV1CustomerCustomerResourcesCalendarsQueryKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/customer/:customer/resources/calendars', args] as const
}

export function getAdminDirectoryV1CustomerCustomerResourcesCalendarsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDirectoryV1CustomerCustomerResourcesCalendarsQueryKey>
  >({
    queryKey: getAdminDirectoryV1CustomerCustomerResourcesCalendarsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1.customer[':customer'].resources.calendars.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminDirectoryV1CustomerCustomerResourcesCalendars<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminDirectoryV1CustomerCustomerResourcesCalendarsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1CustomerCustomerResourcesCalendarsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdminDirectoryV1CustomerCustomerResourcesCalendarsMutationKey() {
  return ['admin', '/admin/directory/v1/customer/:customer/resources/calendars', 'POST'] as const
}

export function getPostAdminDirectoryV1CustomerCustomerResourcesCalendarsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDirectoryV1CustomerCustomerResourcesCalendarsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.customer[':customer'].resources.calendars.$post(args, options),
      )
    },
  })
}

export function injectPostAdminDirectoryV1CustomerCustomerResourcesCalendars<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAdminDirectoryV1CustomerCustomerResourcesCalendarsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdQueryKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars'][':calendarResourceId']['$get']
  >,
) {
  return [
    'admin',
    '/admin/directory/v1/customer/:customer/resources/calendars/:calendarResourceId',
    args,
  ] as const
}

export function getAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars'][':calendarResourceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars'][':calendarResourceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars'][':calendarResourceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdQueryKey
    >
  >({
    queryKey: getAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1.customer[':customer'].resources.calendars[
          ':calendarResourceId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars'][':calendarResourceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars'][':calendarResourceId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars'][':calendarResourceId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdMutationKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customer/resources/calendars/:calendarResourceId',
    'PUT',
  ] as const
}

export function getPutAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars'][':calendarResourceId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars'][':calendarResourceId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars'][':calendarResourceId']['$put']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.customer[':customer'].resources.calendars[
          ':calendarResourceId'
        ].$put(args, options),
      )
    },
  })
}

export function injectPutAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars'][':calendarResourceId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars'][':calendarResourceId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdMutationKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customer/resources/calendars/:calendarResourceId',
    'DELETE',
  ] as const
}

export function getDeleteAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars'][':calendarResourceId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars'][':calendarResourceId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars'][':calendarResourceId']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.customer[':customer'].resources.calendars[
          ':calendarResourceId'
        ].$delete(args, options),
      )
    },
  })
}

export function injectDeleteAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars'][':calendarResourceId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars'][':calendarResourceId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdMutationKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customer/resources/calendars/:calendarResourceId',
    'PATCH',
  ] as const
}

export function getPatchAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars'][':calendarResourceId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars'][':calendarResourceId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars'][':calendarResourceId']['$patch']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.customer[':customer'].resources.calendars[
          ':calendarResourceId'
        ].$patch(args, options),
      )
    },
  })
}

export function injectPatchAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars'][':calendarResourceId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars'][':calendarResourceId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminDirectoryV1CustomerCustomerResourcesFeaturesQueryKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['features']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/customer/:customer/resources/features', args] as const
}

export function getAdminDirectoryV1CustomerCustomerResourcesFeaturesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.customer)[':customer']['resources']['features']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['features']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customer']['resources']['features']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDirectoryV1CustomerCustomerResourcesFeaturesQueryKey>
  >({
    queryKey: getAdminDirectoryV1CustomerCustomerResourcesFeaturesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1.customer[':customer'].resources.features.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminDirectoryV1CustomerCustomerResourcesFeatures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.customer)[':customer']['resources']['features']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['features']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customer']['resources']['features']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminDirectoryV1CustomerCustomerResourcesFeaturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1CustomerCustomerResourcesFeaturesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdminDirectoryV1CustomerCustomerResourcesFeaturesMutationKey() {
  return ['admin', '/admin/directory/v1/customer/:customer/resources/features', 'POST'] as const
}

export function getPostAdminDirectoryV1CustomerCustomerResourcesFeaturesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customer']['resources']['features']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customer']['resources']['features']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDirectoryV1CustomerCustomerResourcesFeaturesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.customer)[':customer']['resources']['features']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.customer[':customer'].resources.features.$post(args, options),
      )
    },
  })
}

export function injectPostAdminDirectoryV1CustomerCustomerResourcesFeatures<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customer']['resources']['features']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.customer)[':customer']['resources']['features']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAdminDirectoryV1CustomerCustomerResourcesFeaturesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyQueryKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['features'][':featureKey']['$get']
  >,
) {
  return [
    'admin',
    '/admin/directory/v1/customer/:customer/resources/features/:featureKey',
    args,
  ] as const
}

export function getAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.customer)[':customer']['resources']['features'][':featureKey']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['features'][':featureKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customer']['resources']['features'][':featureKey']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyQueryKey>
  >({
    queryKey: getAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1.customer[':customer'].resources.features[':featureKey'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.customer)[':customer']['resources']['features'][':featureKey']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['features'][':featureKey']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customer']['resources']['features'][':featureKey']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyMutationKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customer/resources/features/:featureKey',
    'PUT',
  ] as const
}

export function getPutAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customer']['resources']['features'][':featureKey']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customer']['resources']['features'][':featureKey']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.customer)[':customer']['resources']['features'][':featureKey']['$put']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.customer[':customer'].resources.features[':featureKey'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customer']['resources']['features'][':featureKey']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.customer)[':customer']['resources']['features'][':featureKey']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyMutationKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customer/resources/features/:featureKey',
    'DELETE',
  ] as const
}

export function getDeleteAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customer']['resources']['features'][':featureKey']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customer']['resources']['features'][':featureKey']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.customer)[':customer']['resources']['features'][':featureKey']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.customer[':customer'].resources.features[':featureKey'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customer']['resources']['features'][':featureKey']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.customer)[':customer']['resources']['features'][':featureKey']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyMutationKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customer/resources/features/:featureKey',
    'PATCH',
  ] as const
}

export function getPatchAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customer']['resources']['features'][':featureKey']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customer']['resources']['features'][':featureKey']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.customer)[':customer']['resources']['features'][':featureKey']['$patch']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.customer[':customer'].resources.features[':featureKey'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPatchAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customer']['resources']['features'][':featureKey']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.customer)[':customer']['resources']['features'][':featureKey']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdminDirectoryV1CustomerCustomerResourcesFeaturesOldNameRenameMutationKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customer/resources/features/:oldName/rename',
    'POST',
  ] as const
}

export function getPostAdminDirectoryV1CustomerCustomerResourcesFeaturesOldNameRenameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customer']['resources']['features'][':oldName']['rename']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customer']['resources']['features'][':oldName']['rename']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDirectoryV1CustomerCustomerResourcesFeaturesOldNameRenameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.customer)[':customer']['resources']['features'][':oldName']['rename']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.customer[':customer'].resources.features[':oldName'].rename.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostAdminDirectoryV1CustomerCustomerResourcesFeaturesOldNameRename<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customer']['resources']['features'][':oldName']['rename']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.customer)[':customer']['resources']['features'][':oldName']['rename']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAdminDirectoryV1CustomerCustomerResourcesFeaturesOldNameRenameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminDirectoryV1CustomerCustomerRoleassignmentsQueryKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['roleassignments']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/customer/:customer/roleassignments', args] as const
}

export function getAdminDirectoryV1CustomerCustomerRoleassignmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.customer)[':customer']['roleassignments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['roleassignments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customer']['roleassignments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDirectoryV1CustomerCustomerRoleassignmentsQueryKey>
  >({
    queryKey: getAdminDirectoryV1CustomerCustomerRoleassignmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1.customer[':customer'].roleassignments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminDirectoryV1CustomerCustomerRoleassignments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.customer)[':customer']['roleassignments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['roleassignments']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customer']['roleassignments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminDirectoryV1CustomerCustomerRoleassignmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1CustomerCustomerRoleassignmentsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdminDirectoryV1CustomerCustomerRoleassignmentsMutationKey() {
  return ['admin', '/admin/directory/v1/customer/:customer/roleassignments', 'POST'] as const
}

export function getPostAdminDirectoryV1CustomerCustomerRoleassignmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customer']['roleassignments']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customer']['roleassignments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDirectoryV1CustomerCustomerRoleassignmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.customer)[':customer']['roleassignments']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.customer[':customer'].roleassignments.$post(args, options),
      )
    },
  })
}

export function injectPostAdminDirectoryV1CustomerCustomerRoleassignments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customer']['roleassignments']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.customer)[':customer']['roleassignments']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminDirectoryV1CustomerCustomerRoleassignmentsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminDirectoryV1CustomerCustomerRoleassignmentsRoleAssignmentIdQueryKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['roleassignments'][':roleAssignmentId']['$get']
  >,
) {
  return [
    'admin',
    '/admin/directory/v1/customer/:customer/roleassignments/:roleAssignmentId',
    args,
  ] as const
}

export function getAdminDirectoryV1CustomerCustomerRoleassignmentsRoleAssignmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.customer)[':customer']['roleassignments'][':roleAssignmentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['roleassignments'][':roleAssignmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customer']['roleassignments'][':roleAssignmentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDirectoryV1CustomerCustomerRoleassignmentsRoleAssignmentIdQueryKey>
  >({
    queryKey: getAdminDirectoryV1CustomerCustomerRoleassignmentsRoleAssignmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1.customer[':customer'].roleassignments[':roleAssignmentId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectAdminDirectoryV1CustomerCustomerRoleassignmentsRoleAssignmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.customer)[':customer']['roleassignments'][':roleAssignmentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['roleassignments'][':roleAssignmentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customer']['roleassignments'][':roleAssignmentId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getAdminDirectoryV1CustomerCustomerRoleassignmentsRoleAssignmentIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1CustomerCustomerRoleassignmentsRoleAssignmentIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteAdminDirectoryV1CustomerCustomerRoleassignmentsRoleAssignmentIdMutationKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customer/roleassignments/:roleAssignmentId',
    'DELETE',
  ] as const
}

export function getDeleteAdminDirectoryV1CustomerCustomerRoleassignmentsRoleAssignmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customer']['roleassignments'][':roleAssignmentId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customer']['roleassignments'][':roleAssignmentId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteAdminDirectoryV1CustomerCustomerRoleassignmentsRoleAssignmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.customer)[':customer']['roleassignments'][':roleAssignmentId']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.customer[':customer'].roleassignments[
          ':roleAssignmentId'
        ].$delete(args, options),
      )
    },
  })
}

export function injectDeleteAdminDirectoryV1CustomerCustomerRoleassignmentsRoleAssignmentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customer']['roleassignments'][':roleAssignmentId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.customer)[':customer']['roleassignments'][':roleAssignmentId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteAdminDirectoryV1CustomerCustomerRoleassignmentsRoleAssignmentIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminDirectoryV1CustomerCustomerRolesQueryKey(
  args: InferRequestType<(typeof client.admin.directory.v1.customer)[':customer']['roles']['$get']>,
) {
  return ['admin', '/admin/directory/v1/customer/:customer/roles', args] as const
}

export function getAdminDirectoryV1CustomerCustomerRolesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.admin.directory.v1.customer)[':customer']['roles']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.directory.v1.customer)[':customer']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.directory.v1.customer)[':customer']['roles']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDirectoryV1CustomerCustomerRolesQueryKey>
  >({
    queryKey: getAdminDirectoryV1CustomerCustomerRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1.customer[':customer'].roles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminDirectoryV1CustomerCustomerRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.admin.directory.v1.customer)[':customer']['roles']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['roles']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customer']['roles']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminDirectoryV1CustomerCustomerRolesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1CustomerCustomerRolesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdminDirectoryV1CustomerCustomerRolesMutationKey() {
  return ['admin', '/admin/directory/v1/customer/:customer/roles', 'POST'] as const
}

export function getPostAdminDirectoryV1CustomerCustomerRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.directory.v1.customer)[':customer']['roles']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.directory.v1.customer)[':customer']['roles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDirectoryV1CustomerCustomerRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.customer)[':customer']['roles']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.customer[':customer'].roles.$post(args, options),
      )
    },
  })
}

export function injectPostAdminDirectoryV1CustomerCustomerRoles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customer']['roles']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.customer)[':customer']['roles']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminDirectoryV1CustomerCustomerRolesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminDirectoryV1CustomerCustomerRolesALLPrivilegesQueryKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['roles']['ALL']['privileges']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/customer/:customer/roles/ALL/privileges', args] as const
}

export function getAdminDirectoryV1CustomerCustomerRolesALLPrivilegesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.customer)[':customer']['roles']['ALL']['privileges']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['roles']['ALL']['privileges']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customer']['roles']['ALL']['privileges']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDirectoryV1CustomerCustomerRolesALLPrivilegesQueryKey>
  >({
    queryKey: getAdminDirectoryV1CustomerCustomerRolesALLPrivilegesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1.customer[':customer'].roles.ALL.privileges.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminDirectoryV1CustomerCustomerRolesALLPrivileges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.customer)[':customer']['roles']['ALL']['privileges']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['roles']['ALL']['privileges']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customer']['roles']['ALL']['privileges']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminDirectoryV1CustomerCustomerRolesALLPrivilegesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1CustomerCustomerRolesALLPrivilegesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getAdminDirectoryV1CustomerCustomerRolesRoleIdQueryKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['roles'][':roleId']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/customer/:customer/roles/:roleId', args] as const
}

export function getAdminDirectoryV1CustomerCustomerRolesRoleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.customer)[':customer']['roles'][':roleId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['roles'][':roleId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customer']['roles'][':roleId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDirectoryV1CustomerCustomerRolesRoleIdQueryKey>
  >({
    queryKey: getAdminDirectoryV1CustomerCustomerRolesRoleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1.customer[':customer'].roles[':roleId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminDirectoryV1CustomerCustomerRolesRoleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.customer)[':customer']['roles'][':roleId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['roles'][':roleId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customer']['roles'][':roleId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminDirectoryV1CustomerCustomerRolesRoleIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1CustomerCustomerRolesRoleIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutAdminDirectoryV1CustomerCustomerRolesRoleIdMutationKey() {
  return ['admin', '/admin/directory/v1/customer/:customer/roles/:roleId', 'PUT'] as const
}

export function getPutAdminDirectoryV1CustomerCustomerRolesRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customer']['roles'][':roleId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customer']['roles'][':roleId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAdminDirectoryV1CustomerCustomerRolesRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.customer)[':customer']['roles'][':roleId']['$put']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.customer[':customer'].roles[':roleId'].$put(args, options),
      )
    },
  })
}

export function injectPutAdminDirectoryV1CustomerCustomerRolesRoleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customer']['roles'][':roleId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.customer)[':customer']['roles'][':roleId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAdminDirectoryV1CustomerCustomerRolesRoleIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteAdminDirectoryV1CustomerCustomerRolesRoleIdMutationKey() {
  return ['admin', '/admin/directory/v1/customer/:customer/roles/:roleId', 'DELETE'] as const
}

export function getDeleteAdminDirectoryV1CustomerCustomerRolesRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customer']['roles'][':roleId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customer']['roles'][':roleId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminDirectoryV1CustomerCustomerRolesRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.customer)[':customer']['roles'][':roleId']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.customer[':customer'].roles[':roleId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteAdminDirectoryV1CustomerCustomerRolesRoleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customer']['roles'][':roleId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.customer)[':customer']['roles'][':roleId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAdminDirectoryV1CustomerCustomerRolesRoleIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAdminDirectoryV1CustomerCustomerRolesRoleIdMutationKey() {
  return ['admin', '/admin/directory/v1/customer/:customer/roles/:roleId', 'PATCH'] as const
}

export function getPatchAdminDirectoryV1CustomerCustomerRolesRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.customer)[':customer']['roles'][':roleId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customer']['roles'][':roleId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchAdminDirectoryV1CustomerCustomerRolesRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.customer)[':customer']['roles'][':roleId']['$patch']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.customer[':customer'].roles[':roleId'].$patch(args, options),
      )
    },
  })
}

export function injectPatchAdminDirectoryV1CustomerCustomerRolesRoleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.customer)[':customer']['roles'][':roleId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.customer)[':customer']['roles'][':roleId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAdminDirectoryV1CustomerCustomerRolesRoleIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminDirectoryV1CustomersCustomerKeyQueryKey(
  args: InferRequestType<(typeof client.admin.directory.v1.customers)[':customerKey']['$get']>,
) {
  return ['admin', '/admin/directory/v1/customers/:customerKey', args] as const
}

export function getAdminDirectoryV1CustomersCustomerKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.directory.v1.customers)[':customerKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.directory.v1.customers)[':customerKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.directory.v1.customers)[':customerKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDirectoryV1CustomersCustomerKeyQueryKey>
  >({
    queryKey: getAdminDirectoryV1CustomersCustomerKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1.customers[':customerKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminDirectoryV1CustomersCustomerKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.directory.v1.customers)[':customerKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.admin.directory.v1.customers)[':customerKey']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.admin.directory.v1.customers)[':customerKey']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminDirectoryV1CustomersCustomerKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1CustomersCustomerKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutAdminDirectoryV1CustomersCustomerKeyMutationKey() {
  return ['admin', '/admin/directory/v1/customers/:customerKey', 'PUT'] as const
}

export function getPutAdminDirectoryV1CustomersCustomerKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.directory.v1.customers)[':customerKey']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.directory.v1.customers)[':customerKey']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminDirectoryV1CustomersCustomerKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.directory.v1.customers)[':customerKey']['$put']>,
    ) {
      return parseResponse(client.admin.directory.v1.customers[':customerKey'].$put(args, options))
    },
  })
}

export function injectPutAdminDirectoryV1CustomersCustomerKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.admin.directory.v1.customers)[':customerKey']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.directory.v1.customers)[':customerKey']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAdminDirectoryV1CustomersCustomerKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAdminDirectoryV1CustomersCustomerKeyMutationKey() {
  return ['admin', '/admin/directory/v1/customers/:customerKey', 'PATCH'] as const
}

export function getPatchAdminDirectoryV1CustomersCustomerKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.directory.v1.customers)[':customerKey']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.directory.v1.customers)[':customerKey']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAdminDirectoryV1CustomersCustomerKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.customers)[':customerKey']['$patch']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.customers[':customerKey'].$patch(args, options),
      )
    },
  })
}

export function injectPatchAdminDirectoryV1CustomersCustomerKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.admin.directory.v1.customers)[':customerKey']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.directory.v1.customers)[':customerKey']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAdminDirectoryV1CustomersCustomerKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminDirectoryV1GroupsQueryKey(
  args: InferRequestType<typeof client.admin.directory.v1.groups.$get>,
) {
  return ['admin', '/admin/directory/v1/groups', args] as const
}

export function getAdminDirectoryV1GroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admin.directory.v1.groups.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admin.directory.v1.groups.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.directory.v1.groups.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDirectoryV1GroupsQueryKey>
  >({
    queryKey: getAdminDirectoryV1GroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1.groups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminDirectoryV1Groups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admin.directory.v1.groups.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.admin.directory.v1.groups.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.directory.v1.groups.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminDirectoryV1GroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1GroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdminDirectoryV1GroupsMutationKey() {
  return ['admin', '/admin/directory/v1/groups', 'POST'] as const
}

export function getPostAdminDirectoryV1GroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.directory.v1.groups.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.directory.v1.groups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDirectoryV1GroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.directory.v1.groups.$post>) {
      return parseResponse(client.admin.directory.v1.groups.$post(args, options))
    },
  })
}

export function injectPostAdminDirectoryV1Groups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.directory.v1.groups.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.admin.directory.v1.groups.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminDirectoryV1GroupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminDirectoryV1GroupsGroupKeyQueryKey(
  args: InferRequestType<(typeof client.admin.directory.v1.groups)[':groupKey']['$get']>,
) {
  return ['admin', '/admin/directory/v1/groups/:groupKey', args] as const
}

export function getAdminDirectoryV1GroupsGroupKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.directory.v1.groups)[':groupKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.directory.v1.groups)[':groupKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.directory.v1.groups)[':groupKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDirectoryV1GroupsGroupKeyQueryKey>
  >({
    queryKey: getAdminDirectoryV1GroupsGroupKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1.groups[':groupKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminDirectoryV1GroupsGroupKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.directory.v1.groups)[':groupKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.admin.directory.v1.groups)[':groupKey']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.directory.v1.groups)[':groupKey']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminDirectoryV1GroupsGroupKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1GroupsGroupKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutAdminDirectoryV1GroupsGroupKeyMutationKey() {
  return ['admin', '/admin/directory/v1/groups/:groupKey', 'PUT'] as const
}

export function getPutAdminDirectoryV1GroupsGroupKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.directory.v1.groups)[':groupKey']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.directory.v1.groups)[':groupKey']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminDirectoryV1GroupsGroupKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.directory.v1.groups)[':groupKey']['$put']>,
    ) {
      return parseResponse(client.admin.directory.v1.groups[':groupKey'].$put(args, options))
    },
  })
}

export function injectPutAdminDirectoryV1GroupsGroupKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.directory.v1.groups)[':groupKey']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.directory.v1.groups)[':groupKey']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAdminDirectoryV1GroupsGroupKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteAdminDirectoryV1GroupsGroupKeyMutationKey() {
  return ['admin', '/admin/directory/v1/groups/:groupKey', 'DELETE'] as const
}

export function getDeleteAdminDirectoryV1GroupsGroupKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.directory.v1.groups)[':groupKey']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.directory.v1.groups)[':groupKey']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminDirectoryV1GroupsGroupKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.directory.v1.groups)[':groupKey']['$delete']>,
    ) {
      return parseResponse(client.admin.directory.v1.groups[':groupKey'].$delete(args, options))
    },
  })
}

export function injectDeleteAdminDirectoryV1GroupsGroupKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.directory.v1.groups)[':groupKey']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.directory.v1.groups)[':groupKey']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAdminDirectoryV1GroupsGroupKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAdminDirectoryV1GroupsGroupKeyMutationKey() {
  return ['admin', '/admin/directory/v1/groups/:groupKey', 'PATCH'] as const
}

export function getPatchAdminDirectoryV1GroupsGroupKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.directory.v1.groups)[':groupKey']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.directory.v1.groups)[':groupKey']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAdminDirectoryV1GroupsGroupKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.directory.v1.groups)[':groupKey']['$patch']>,
    ) {
      return parseResponse(client.admin.directory.v1.groups[':groupKey'].$patch(args, options))
    },
  })
}

export function injectPatchAdminDirectoryV1GroupsGroupKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.directory.v1.groups)[':groupKey']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.directory.v1.groups)[':groupKey']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAdminDirectoryV1GroupsGroupKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminDirectoryV1GroupsGroupKeyAliasesQueryKey(
  args: InferRequestType<(typeof client.admin.directory.v1.groups)[':groupKey']['aliases']['$get']>,
) {
  return ['admin', '/admin/directory/v1/groups/:groupKey/aliases', args] as const
}

export function getAdminDirectoryV1GroupsGroupKeyAliasesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.admin.directory.v1.groups)[':groupKey']['aliases']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.directory.v1.groups)[':groupKey']['aliases']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.directory.v1.groups)[':groupKey']['aliases']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDirectoryV1GroupsGroupKeyAliasesQueryKey>
  >({
    queryKey: getAdminDirectoryV1GroupsGroupKeyAliasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1.groups[':groupKey'].aliases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminDirectoryV1GroupsGroupKeyAliases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.admin.directory.v1.groups)[':groupKey']['aliases']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.admin.directory.v1.groups)[':groupKey']['aliases']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.groups)[':groupKey']['aliases']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminDirectoryV1GroupsGroupKeyAliasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1GroupsGroupKeyAliasesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdminDirectoryV1GroupsGroupKeyAliasesMutationKey() {
  return ['admin', '/admin/directory/v1/groups/:groupKey/aliases', 'POST'] as const
}

export function getPostAdminDirectoryV1GroupsGroupKeyAliasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.directory.v1.groups)[':groupKey']['aliases']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.directory.v1.groups)[':groupKey']['aliases']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDirectoryV1GroupsGroupKeyAliasesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.groups)[':groupKey']['aliases']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.groups[':groupKey'].aliases.$post(args, options),
      )
    },
  })
}

export function injectPostAdminDirectoryV1GroupsGroupKeyAliases<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.groups)[':groupKey']['aliases']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.groups)[':groupKey']['aliases']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminDirectoryV1GroupsGroupKeyAliasesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteAdminDirectoryV1GroupsGroupKeyAliasesAliasMutationKey() {
  return ['admin', '/admin/directory/v1/groups/:groupKey/aliases/:alias', 'DELETE'] as const
}

export function getDeleteAdminDirectoryV1GroupsGroupKeyAliasesAliasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.groups)[':groupKey']['aliases'][':alias']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.groups)[':groupKey']['aliases'][':alias']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminDirectoryV1GroupsGroupKeyAliasesAliasMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.groups)[':groupKey']['aliases'][':alias']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.groups[':groupKey'].aliases[':alias'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteAdminDirectoryV1GroupsGroupKeyAliasesAlias<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.groups)[':groupKey']['aliases'][':alias']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.groups)[':groupKey']['aliases'][':alias']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAdminDirectoryV1GroupsGroupKeyAliasesAliasMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminDirectoryV1GroupsGroupKeyHasMemberMemberKeyQueryKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.groups)[':groupKey']['hasMember'][':memberKey']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/groups/:groupKey/hasMember/:memberKey', args] as const
}

export function getAdminDirectoryV1GroupsGroupKeyHasMemberMemberKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.groups)[':groupKey']['hasMember'][':memberKey']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.groups)[':groupKey']['hasMember'][':memberKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.groups)[':groupKey']['hasMember'][':memberKey']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDirectoryV1GroupsGroupKeyHasMemberMemberKeyQueryKey>
  >({
    queryKey: getAdminDirectoryV1GroupsGroupKeyHasMemberMemberKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1.groups[':groupKey'].hasMember[':memberKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminDirectoryV1GroupsGroupKeyHasMemberMemberKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.groups)[':groupKey']['hasMember'][':memberKey']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.admin.directory.v1.groups)[':groupKey']['hasMember'][':memberKey']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.groups)[':groupKey']['hasMember'][':memberKey']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminDirectoryV1GroupsGroupKeyHasMemberMemberKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1GroupsGroupKeyHasMemberMemberKeyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getAdminDirectoryV1GroupsGroupKeyMembersQueryKey(
  args: InferRequestType<(typeof client.admin.directory.v1.groups)[':groupKey']['members']['$get']>,
) {
  return ['admin', '/admin/directory/v1/groups/:groupKey/members', args] as const
}

export function getAdminDirectoryV1GroupsGroupKeyMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.admin.directory.v1.groups)[':groupKey']['members']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.directory.v1.groups)[':groupKey']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.directory.v1.groups)[':groupKey']['members']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDirectoryV1GroupsGroupKeyMembersQueryKey>
  >({
    queryKey: getAdminDirectoryV1GroupsGroupKeyMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1.groups[':groupKey'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminDirectoryV1GroupsGroupKeyMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.admin.directory.v1.groups)[':groupKey']['members']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.admin.directory.v1.groups)[':groupKey']['members']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.groups)[':groupKey']['members']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminDirectoryV1GroupsGroupKeyMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1GroupsGroupKeyMembersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdminDirectoryV1GroupsGroupKeyMembersMutationKey() {
  return ['admin', '/admin/directory/v1/groups/:groupKey/members', 'POST'] as const
}

export function getPostAdminDirectoryV1GroupsGroupKeyMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.directory.v1.groups)[':groupKey']['members']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.directory.v1.groups)[':groupKey']['members']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDirectoryV1GroupsGroupKeyMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.groups)[':groupKey']['members']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.groups[':groupKey'].members.$post(args, options),
      )
    },
  })
}

export function injectPostAdminDirectoryV1GroupsGroupKeyMembers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.groups)[':groupKey']['members']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.groups)[':groupKey']['members']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminDirectoryV1GroupsGroupKeyMembersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminDirectoryV1GroupsGroupKeyMembersMemberKeyQueryKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.groups)[':groupKey']['members'][':memberKey']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/groups/:groupKey/members/:memberKey', args] as const
}

export function getAdminDirectoryV1GroupsGroupKeyMembersMemberKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.groups)[':groupKey']['members'][':memberKey']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.groups)[':groupKey']['members'][':memberKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.groups)[':groupKey']['members'][':memberKey']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDirectoryV1GroupsGroupKeyMembersMemberKeyQueryKey>
  >({
    queryKey: getAdminDirectoryV1GroupsGroupKeyMembersMemberKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1.groups[':groupKey'].members[':memberKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminDirectoryV1GroupsGroupKeyMembersMemberKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.groups)[':groupKey']['members'][':memberKey']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.admin.directory.v1.groups)[':groupKey']['members'][':memberKey']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.groups)[':groupKey']['members'][':memberKey']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminDirectoryV1GroupsGroupKeyMembersMemberKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1GroupsGroupKeyMembersMemberKeyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutAdminDirectoryV1GroupsGroupKeyMembersMemberKeyMutationKey() {
  return ['admin', '/admin/directory/v1/groups/:groupKey/members/:memberKey', 'PUT'] as const
}

export function getPutAdminDirectoryV1GroupsGroupKeyMembersMemberKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.groups)[':groupKey']['members'][':memberKey']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.groups)[':groupKey']['members'][':memberKey']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAdminDirectoryV1GroupsGroupKeyMembersMemberKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.groups)[':groupKey']['members'][':memberKey']['$put']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.groups[':groupKey'].members[':memberKey'].$put(args, options),
      )
    },
  })
}

export function injectPutAdminDirectoryV1GroupsGroupKeyMembersMemberKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.groups)[':groupKey']['members'][':memberKey']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.groups)[':groupKey']['members'][':memberKey']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAdminDirectoryV1GroupsGroupKeyMembersMemberKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteAdminDirectoryV1GroupsGroupKeyMembersMemberKeyMutationKey() {
  return ['admin', '/admin/directory/v1/groups/:groupKey/members/:memberKey', 'DELETE'] as const
}

export function getDeleteAdminDirectoryV1GroupsGroupKeyMembersMemberKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.groups)[':groupKey']['members'][':memberKey']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.groups)[':groupKey']['members'][':memberKey']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminDirectoryV1GroupsGroupKeyMembersMemberKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.groups)[':groupKey']['members'][':memberKey']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.groups[':groupKey'].members[':memberKey'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteAdminDirectoryV1GroupsGroupKeyMembersMemberKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.groups)[':groupKey']['members'][':memberKey']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.groups)[':groupKey']['members'][':memberKey']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAdminDirectoryV1GroupsGroupKeyMembersMemberKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAdminDirectoryV1GroupsGroupKeyMembersMemberKeyMutationKey() {
  return ['admin', '/admin/directory/v1/groups/:groupKey/members/:memberKey', 'PATCH'] as const
}

export function getPatchAdminDirectoryV1GroupsGroupKeyMembersMemberKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.groups)[':groupKey']['members'][':memberKey']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.groups)[':groupKey']['members'][':memberKey']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchAdminDirectoryV1GroupsGroupKeyMembersMemberKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.groups)[':groupKey']['members'][':memberKey']['$patch']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.groups[':groupKey'].members[':memberKey'].$patch(args, options),
      )
    },
  })
}

export function injectPatchAdminDirectoryV1GroupsGroupKeyMembersMemberKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.groups)[':groupKey']['members'][':memberKey']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.groups)[':groupKey']['members'][':memberKey']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAdminDirectoryV1GroupsGroupKeyMembersMemberKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminDirectoryV1UsersQueryKey(
  args: InferRequestType<typeof client.admin.directory.v1.users.$get>,
) {
  return ['admin', '/admin/directory/v1/users', args] as const
}

export function getAdminDirectoryV1UsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admin.directory.v1.users.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.admin.directory.v1.users.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.directory.v1.users.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDirectoryV1UsersQueryKey>
  >({
    queryKey: getAdminDirectoryV1UsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1.users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminDirectoryV1Users<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admin.directory.v1.users.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.admin.directory.v1.users.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.directory.v1.users.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminDirectoryV1UsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1UsersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdminDirectoryV1UsersMutationKey() {
  return ['admin', '/admin/directory/v1/users', 'POST'] as const
}

export function getPostAdminDirectoryV1UsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.directory.v1.users.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.directory.v1.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDirectoryV1UsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.directory.v1.users.$post>) {
      return parseResponse(client.admin.directory.v1.users.$post(args, options))
    },
  })
}

export function injectPostAdminDirectoryV1Users<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.directory.v1.users.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.admin.directory.v1.users.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminDirectoryV1UsersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdminDirectoryV1UsersWatchMutationKey() {
  return ['admin', '/admin/directory/v1/users/watch', 'POST'] as const
}

export function getPostAdminDirectoryV1UsersWatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.directory.v1.users.watch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.admin.directory.v1.users.watch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDirectoryV1UsersWatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.directory.v1.users.watch.$post>) {
      return parseResponse(client.admin.directory.v1.users.watch.$post(args, options))
    },
  })
}

export function injectPostAdminDirectoryV1UsersWatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.directory.v1.users.watch.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.directory.v1.users.watch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminDirectoryV1UsersWatchMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminDirectoryV1UsersUserKeyQueryKey(
  args: InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['$get']>,
) {
  return ['admin', '/admin/directory/v1/users/:userKey', args] as const
}

export function getAdminDirectoryV1UsersUserKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDirectoryV1UsersUserKeyQueryKey>
  >({
    queryKey: getAdminDirectoryV1UsersUserKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1.users[':userKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminDirectoryV1UsersUserKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminDirectoryV1UsersUserKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1UsersUserKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutAdminDirectoryV1UsersUserKeyMutationKey() {
  return ['admin', '/admin/directory/v1/users/:userKey', 'PUT'] as const
}

export function getPutAdminDirectoryV1UsersUserKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminDirectoryV1UsersUserKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['$put']>,
    ) {
      return parseResponse(client.admin.directory.v1.users[':userKey'].$put(args, options))
    },
  })
}

export function injectPutAdminDirectoryV1UsersUserKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAdminDirectoryV1UsersUserKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteAdminDirectoryV1UsersUserKeyMutationKey() {
  return ['admin', '/admin/directory/v1/users/:userKey', 'DELETE'] as const
}

export function getDeleteAdminDirectoryV1UsersUserKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminDirectoryV1UsersUserKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['$delete']>,
    ) {
      return parseResponse(client.admin.directory.v1.users[':userKey'].$delete(args, options))
    },
  })
}

export function injectDeleteAdminDirectoryV1UsersUserKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAdminDirectoryV1UsersUserKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAdminDirectoryV1UsersUserKeyMutationKey() {
  return ['admin', '/admin/directory/v1/users/:userKey', 'PATCH'] as const
}

export function getPatchAdminDirectoryV1UsersUserKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAdminDirectoryV1UsersUserKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['$patch']>,
    ) {
      return parseResponse(client.admin.directory.v1.users[':userKey'].$patch(args, options))
    },
  })
}

export function injectPatchAdminDirectoryV1UsersUserKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAdminDirectoryV1UsersUserKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminDirectoryV1UsersUserKeyAliasesQueryKey(
  args: InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['aliases']['$get']>,
) {
  return ['admin', '/admin/directory/v1/users/:userKey/aliases', args] as const
}

export function getAdminDirectoryV1UsersUserKeyAliasesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['aliases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['aliases']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['aliases']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDirectoryV1UsersUserKeyAliasesQueryKey>
  >({
    queryKey: getAdminDirectoryV1UsersUserKeyAliasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1.users[':userKey'].aliases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminDirectoryV1UsersUserKeyAliases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['aliases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.admin.directory.v1.users)[':userKey']['aliases']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['aliases']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminDirectoryV1UsersUserKeyAliasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1UsersUserKeyAliasesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdminDirectoryV1UsersUserKeyAliasesMutationKey() {
  return ['admin', '/admin/directory/v1/users/:userKey/aliases', 'POST'] as const
}

export function getPostAdminDirectoryV1UsersUserKeyAliasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['aliases']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['aliases']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDirectoryV1UsersUserKeyAliasesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.users)[':userKey']['aliases']['$post']
      >,
    ) {
      return parseResponse(client.admin.directory.v1.users[':userKey'].aliases.$post(args, options))
    },
  })
}

export function injectPostAdminDirectoryV1UsersUserKeyAliases<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['aliases']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['aliases']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminDirectoryV1UsersUserKeyAliasesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdminDirectoryV1UsersUserKeyAliasesWatchMutationKey() {
  return ['admin', '/admin/directory/v1/users/:userKey/aliases/watch', 'POST'] as const
}

export function getPostAdminDirectoryV1UsersUserKeyAliasesWatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.users)[':userKey']['aliases']['watch']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.users)[':userKey']['aliases']['watch']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDirectoryV1UsersUserKeyAliasesWatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.users)[':userKey']['aliases']['watch']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.users[':userKey'].aliases.watch.$post(args, options),
      )
    },
  })
}

export function injectPostAdminDirectoryV1UsersUserKeyAliasesWatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.users)[':userKey']['aliases']['watch']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.users)[':userKey']['aliases']['watch']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminDirectoryV1UsersUserKeyAliasesWatchMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteAdminDirectoryV1UsersUserKeyAliasesAliasMutationKey() {
  return ['admin', '/admin/directory/v1/users/:userKey/aliases/:alias', 'DELETE'] as const
}

export function getDeleteAdminDirectoryV1UsersUserKeyAliasesAliasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.users)[':userKey']['aliases'][':alias']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.users)[':userKey']['aliases'][':alias']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminDirectoryV1UsersUserKeyAliasesAliasMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.users)[':userKey']['aliases'][':alias']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.users[':userKey'].aliases[':alias'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteAdminDirectoryV1UsersUserKeyAliasesAlias<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.users)[':userKey']['aliases'][':alias']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.users)[':userKey']['aliases'][':alias']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAdminDirectoryV1UsersUserKeyAliasesAliasMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminDirectoryV1UsersUserKeyAspsQueryKey(
  args: InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['asps']['$get']>,
) {
  return ['admin', '/admin/directory/v1/users/:userKey/asps', args] as const
}

export function getAdminDirectoryV1UsersUserKeyAspsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['asps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['asps']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['asps']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDirectoryV1UsersUserKeyAspsQueryKey>
  >({
    queryKey: getAdminDirectoryV1UsersUserKeyAspsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1.users[':userKey'].asps.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminDirectoryV1UsersUserKeyAsps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['asps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.admin.directory.v1.users)[':userKey']['asps']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['asps']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminDirectoryV1UsersUserKeyAspsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1UsersUserKeyAspsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAdminDirectoryV1UsersUserKeyAspsCodeIdQueryKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.users)[':userKey']['asps'][':codeId']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/users/:userKey/asps/:codeId', args] as const
}

export function getAdminDirectoryV1UsersUserKeyAspsCodeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.users)[':userKey']['asps'][':codeId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.users)[':userKey']['asps'][':codeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.users)[':userKey']['asps'][':codeId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDirectoryV1UsersUserKeyAspsCodeIdQueryKey>
  >({
    queryKey: getAdminDirectoryV1UsersUserKeyAspsCodeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1.users[':userKey'].asps[':codeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminDirectoryV1UsersUserKeyAspsCodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.users)[':userKey']['asps'][':codeId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.admin.directory.v1.users)[':userKey']['asps'][':codeId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.users)[':userKey']['asps'][':codeId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminDirectoryV1UsersUserKeyAspsCodeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1UsersUserKeyAspsCodeIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteAdminDirectoryV1UsersUserKeyAspsCodeIdMutationKey() {
  return ['admin', '/admin/directory/v1/users/:userKey/asps/:codeId', 'DELETE'] as const
}

export function getDeleteAdminDirectoryV1UsersUserKeyAspsCodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.users)[':userKey']['asps'][':codeId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.users)[':userKey']['asps'][':codeId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminDirectoryV1UsersUserKeyAspsCodeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.users)[':userKey']['asps'][':codeId']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.users[':userKey'].asps[':codeId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteAdminDirectoryV1UsersUserKeyAspsCodeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.users)[':userKey']['asps'][':codeId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.users)[':userKey']['asps'][':codeId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAdminDirectoryV1UsersUserKeyAspsCodeIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdminDirectoryV1UsersUserKeyMakeAdminMutationKey() {
  return ['admin', '/admin/directory/v1/users/:userKey/makeAdmin', 'POST'] as const
}

export function getPostAdminDirectoryV1UsersUserKeyMakeAdminMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['makeAdmin']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['makeAdmin']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDirectoryV1UsersUserKeyMakeAdminMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.users)[':userKey']['makeAdmin']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.users[':userKey'].makeAdmin.$post(args, options),
      )
    },
  })
}

export function injectPostAdminDirectoryV1UsersUserKeyMakeAdmin<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.users)[':userKey']['makeAdmin']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.users)[':userKey']['makeAdmin']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminDirectoryV1UsersUserKeyMakeAdminMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminDirectoryV1UsersUserKeyPhotosThumbnailQueryKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.users)[':userKey']['photos']['thumbnail']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/users/:userKey/photos/thumbnail', args] as const
}

export function getAdminDirectoryV1UsersUserKeyPhotosThumbnailQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.users)[':userKey']['photos']['thumbnail']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.users)[':userKey']['photos']['thumbnail']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.users)[':userKey']['photos']['thumbnail']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDirectoryV1UsersUserKeyPhotosThumbnailQueryKey>
  >({
    queryKey: getAdminDirectoryV1UsersUserKeyPhotosThumbnailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1.users[':userKey'].photos.thumbnail.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminDirectoryV1UsersUserKeyPhotosThumbnail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.users)[':userKey']['photos']['thumbnail']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.admin.directory.v1.users)[':userKey']['photos']['thumbnail']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.users)[':userKey']['photos']['thumbnail']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminDirectoryV1UsersUserKeyPhotosThumbnailQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1UsersUserKeyPhotosThumbnailQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutAdminDirectoryV1UsersUserKeyPhotosThumbnailMutationKey() {
  return ['admin', '/admin/directory/v1/users/:userKey/photos/thumbnail', 'PUT'] as const
}

export function getPutAdminDirectoryV1UsersUserKeyPhotosThumbnailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.users)[':userKey']['photos']['thumbnail']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.users)[':userKey']['photos']['thumbnail']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAdminDirectoryV1UsersUserKeyPhotosThumbnailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.users)[':userKey']['photos']['thumbnail']['$put']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.users[':userKey'].photos.thumbnail.$put(args, options),
      )
    },
  })
}

export function injectPutAdminDirectoryV1UsersUserKeyPhotosThumbnail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.users)[':userKey']['photos']['thumbnail']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.users)[':userKey']['photos']['thumbnail']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAdminDirectoryV1UsersUserKeyPhotosThumbnailMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteAdminDirectoryV1UsersUserKeyPhotosThumbnailMutationKey() {
  return ['admin', '/admin/directory/v1/users/:userKey/photos/thumbnail', 'DELETE'] as const
}

export function getDeleteAdminDirectoryV1UsersUserKeyPhotosThumbnailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.users)[':userKey']['photos']['thumbnail']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.users)[':userKey']['photos']['thumbnail']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminDirectoryV1UsersUserKeyPhotosThumbnailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.users)[':userKey']['photos']['thumbnail']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.users[':userKey'].photos.thumbnail.$delete(args, options),
      )
    },
  })
}

export function injectDeleteAdminDirectoryV1UsersUserKeyPhotosThumbnail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.users)[':userKey']['photos']['thumbnail']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.users)[':userKey']['photos']['thumbnail']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAdminDirectoryV1UsersUserKeyPhotosThumbnailMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAdminDirectoryV1UsersUserKeyPhotosThumbnailMutationKey() {
  return ['admin', '/admin/directory/v1/users/:userKey/photos/thumbnail', 'PATCH'] as const
}

export function getPatchAdminDirectoryV1UsersUserKeyPhotosThumbnailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.users)[':userKey']['photos']['thumbnail']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.users)[':userKey']['photos']['thumbnail']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchAdminDirectoryV1UsersUserKeyPhotosThumbnailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.users)[':userKey']['photos']['thumbnail']['$patch']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.users[':userKey'].photos.thumbnail.$patch(args, options),
      )
    },
  })
}

export function injectPatchAdminDirectoryV1UsersUserKeyPhotosThumbnail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.users)[':userKey']['photos']['thumbnail']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.users)[':userKey']['photos']['thumbnail']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAdminDirectoryV1UsersUserKeyPhotosThumbnailMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdminDirectoryV1UsersUserKeySignOutMutationKey() {
  return ['admin', '/admin/directory/v1/users/:userKey/signOut', 'POST'] as const
}

export function getPostAdminDirectoryV1UsersUserKeySignOutMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['signOut']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['signOut']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDirectoryV1UsersUserKeySignOutMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.users)[':userKey']['signOut']['$post']
      >,
    ) {
      return parseResponse(client.admin.directory.v1.users[':userKey'].signOut.$post(args, options))
    },
  })
}

export function injectPostAdminDirectoryV1UsersUserKeySignOut<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['signOut']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['signOut']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminDirectoryV1UsersUserKeySignOutMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminDirectoryV1UsersUserKeyTokensQueryKey(
  args: InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['tokens']['$get']>,
) {
  return ['admin', '/admin/directory/v1/users/:userKey/tokens', args] as const
}

export function getAdminDirectoryV1UsersUserKeyTokensQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['tokens']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['tokens']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDirectoryV1UsersUserKeyTokensQueryKey>
  >({
    queryKey: getAdminDirectoryV1UsersUserKeyTokensQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1.users[':userKey'].tokens.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminDirectoryV1UsersUserKeyTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['tokens']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.admin.directory.v1.users)[':userKey']['tokens']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['tokens']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminDirectoryV1UsersUserKeyTokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1UsersUserKeyTokensQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAdminDirectoryV1UsersUserKeyTokensClientIdQueryKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.users)[':userKey']['tokens'][':clientId']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/users/:userKey/tokens/:clientId', args] as const
}

export function getAdminDirectoryV1UsersUserKeyTokensClientIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.users)[':userKey']['tokens'][':clientId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.users)[':userKey']['tokens'][':clientId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.users)[':userKey']['tokens'][':clientId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDirectoryV1UsersUserKeyTokensClientIdQueryKey>
  >({
    queryKey: getAdminDirectoryV1UsersUserKeyTokensClientIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1.users[':userKey'].tokens[':clientId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminDirectoryV1UsersUserKeyTokensClientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.users)[':userKey']['tokens'][':clientId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.admin.directory.v1.users)[':userKey']['tokens'][':clientId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.users)[':userKey']['tokens'][':clientId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminDirectoryV1UsersUserKeyTokensClientIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1UsersUserKeyTokensClientIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteAdminDirectoryV1UsersUserKeyTokensClientIdMutationKey() {
  return ['admin', '/admin/directory/v1/users/:userKey/tokens/:clientId', 'DELETE'] as const
}

export function getDeleteAdminDirectoryV1UsersUserKeyTokensClientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.users)[':userKey']['tokens'][':clientId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.users)[':userKey']['tokens'][':clientId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminDirectoryV1UsersUserKeyTokensClientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.users)[':userKey']['tokens'][':clientId']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.users[':userKey'].tokens[':clientId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteAdminDirectoryV1UsersUserKeyTokensClientId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.users)[':userKey']['tokens'][':clientId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.users)[':userKey']['tokens'][':clientId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAdminDirectoryV1UsersUserKeyTokensClientIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdminDirectoryV1UsersUserKeyTwoStepVerificationTurnOffMutationKey() {
  return [
    'admin',
    '/admin/directory/v1/users/:userKey/twoStepVerification/turnOff',
    'POST',
  ] as const
}

export function getPostAdminDirectoryV1UsersUserKeyTwoStepVerificationTurnOffMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.users)[':userKey']['twoStepVerification']['turnOff']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.users)[':userKey']['twoStepVerification']['turnOff']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDirectoryV1UsersUserKeyTwoStepVerificationTurnOffMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.users)[':userKey']['twoStepVerification']['turnOff']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.users[':userKey'].twoStepVerification.turnOff.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostAdminDirectoryV1UsersUserKeyTwoStepVerificationTurnOff<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.users)[':userKey']['twoStepVerification']['turnOff']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.users)[':userKey']['twoStepVerification']['turnOff']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAdminDirectoryV1UsersUserKeyTwoStepVerificationTurnOffMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdminDirectoryV1UsersUserKeyUndeleteMutationKey() {
  return ['admin', '/admin/directory/v1/users/:userKey/undelete', 'POST'] as const
}

export function getPostAdminDirectoryV1UsersUserKeyUndeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['undelete']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['undelete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDirectoryV1UsersUserKeyUndeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.users)[':userKey']['undelete']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.users[':userKey'].undelete.$post(args, options),
      )
    },
  })
}

export function injectPostAdminDirectoryV1UsersUserKeyUndelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.users)[':userKey']['undelete']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['undelete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminDirectoryV1UsersUserKeyUndeleteMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminDirectoryV1UsersUserKeyVerificationCodesQueryKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.users)[':userKey']['verificationCodes']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/users/:userKey/verificationCodes', args] as const
}

export function getAdminDirectoryV1UsersUserKeyVerificationCodesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.users)[':userKey']['verificationCodes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.users)[':userKey']['verificationCodes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.users)[':userKey']['verificationCodes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDirectoryV1UsersUserKeyVerificationCodesQueryKey>
  >({
    queryKey: getAdminDirectoryV1UsersUserKeyVerificationCodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1.users[':userKey'].verificationCodes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminDirectoryV1UsersUserKeyVerificationCodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1.users)[':userKey']['verificationCodes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.admin.directory.v1.users)[':userKey']['verificationCodes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.users)[':userKey']['verificationCodes']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminDirectoryV1UsersUserKeyVerificationCodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1UsersUserKeyVerificationCodesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdminDirectoryV1UsersUserKeyVerificationCodesGenerateMutationKey() {
  return ['admin', '/admin/directory/v1/users/:userKey/verificationCodes/generate', 'POST'] as const
}

export function getPostAdminDirectoryV1UsersUserKeyVerificationCodesGenerateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.users)[':userKey']['verificationCodes']['generate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.users)[':userKey']['verificationCodes']['generate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDirectoryV1UsersUserKeyVerificationCodesGenerateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.users)[':userKey']['verificationCodes']['generate']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.users[':userKey'].verificationCodes.generate.$post(args, options),
      )
    },
  })
}

export function injectPostAdminDirectoryV1UsersUserKeyVerificationCodesGenerate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.users)[':userKey']['verificationCodes']['generate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.users)[':userKey']['verificationCodes']['generate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAdminDirectoryV1UsersUserKeyVerificationCodesGenerateMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdminDirectoryV1UsersUserKeyVerificationCodesInvalidateMutationKey() {
  return [
    'admin',
    '/admin/directory/v1/users/:userKey/verificationCodes/invalidate',
    'POST',
  ] as const
}

export function getPostAdminDirectoryV1UsersUserKeyVerificationCodesInvalidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1.users)[':userKey']['verificationCodes']['invalidate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1.users)[':userKey']['verificationCodes']['invalidate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDirectoryV1UsersUserKeyVerificationCodesInvalidateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1.users)[':userKey']['verificationCodes']['invalidate']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1.users[':userKey'].verificationCodes.invalidate.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostAdminDirectoryV1UsersUserKeyVerificationCodesInvalidate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1.users)[':userKey']['verificationCodes']['invalidate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1.users)[':userKey']['verificationCodes']['invalidate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAdminDirectoryV1UsersUserKeyVerificationCodesInvalidateMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminDirectoryV1NameQueryKey(
  args: InferRequestType<(typeof client.admin.directory.v1)[':name']['$get']>,
) {
  return ['admin', '/admin/directory/v1/:name', args] as const
}

export function getAdminDirectoryV1NameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.directory.v1)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.directory.v1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.directory.v1)[':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDirectoryV1NameQueryKey>
  >({
    queryKey: getAdminDirectoryV1NameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminDirectoryV1Name<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.directory.v1)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.admin.directory.v1)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.directory.v1)[':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminDirectoryV1NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1NameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteAdminDirectoryV1NameMutationKey() {
  return ['admin', '/admin/directory/v1/:name', 'DELETE'] as const
}

export function getDeleteAdminDirectoryV1NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.directory.v1)[':name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.directory.v1)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminDirectoryV1NameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.directory.v1)[':name']['$delete']>,
    ) {
      return parseResponse(client.admin.directory.v1[':name'].$delete(args, options))
    },
  })
}

export function injectDeleteAdminDirectoryV1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.directory.v1)[':name']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.directory.v1)[':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAdminDirectoryV1NameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAdminDirectoryV1NameMutationKey() {
  return ['admin', '/admin/directory/v1/:name', 'PATCH'] as const
}

export function getPatchAdminDirectoryV1NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.directory.v1)[':name']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.directory.v1)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAdminDirectoryV1NameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.directory.v1)[':name']['$patch']>,
    ) {
      return parseResponse(client.admin.directory.v1[':name'].$patch(args, options))
    },
  })
}

export function injectPatchAdminDirectoryV1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.directory.v1)[':name']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.directory.v1)[':name']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAdminDirectoryV1NameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminDirectoryV1ParentChromePrintServersQueryKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1)[':parent']['chrome']['printServers']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/:parent/chrome/printServers', args] as const
}

export function getAdminDirectoryV1ParentChromePrintServersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1)[':parent']['chrome']['printServers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1)[':parent']['chrome']['printServers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1)[':parent']['chrome']['printServers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDirectoryV1ParentChromePrintServersQueryKey>
  >({
    queryKey: getAdminDirectoryV1ParentChromePrintServersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1[':parent'].chrome.printServers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminDirectoryV1ParentChromePrintServers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1)[':parent']['chrome']['printServers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.admin.directory.v1)[':parent']['chrome']['printServers']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1)[':parent']['chrome']['printServers']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminDirectoryV1ParentChromePrintServersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1ParentChromePrintServersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdminDirectoryV1ParentChromePrintServersMutationKey() {
  return ['admin', '/admin/directory/v1/:parent/chrome/printServers', 'POST'] as const
}

export function getPostAdminDirectoryV1ParentChromePrintServersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1)[':parent']['chrome']['printServers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1)[':parent']['chrome']['printServers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDirectoryV1ParentChromePrintServersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1)[':parent']['chrome']['printServers']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1[':parent'].chrome.printServers.$post(args, options),
      )
    },
  })
}

export function injectPostAdminDirectoryV1ParentChromePrintServers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1)[':parent']['chrome']['printServers']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1)[':parent']['chrome']['printServers']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminDirectoryV1ParentChromePrintServersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdminDirectoryV1ParentChromePrintServersBatchCreatePrintServersMutationKey() {
  return [
    'admin',
    '/admin/directory/v1/:parent/chrome/printServers:batchCreatePrintServers',
    'POST',
  ] as const
}

export function getPostAdminDirectoryV1ParentChromePrintServersBatchCreatePrintServersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1)[':parent']['chrome']['printServers:batchCreatePrintServers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1)[':parent']['chrome']['printServers:batchCreatePrintServers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAdminDirectoryV1ParentChromePrintServersBatchCreatePrintServersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1)[':parent']['chrome']['printServers:batchCreatePrintServers']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1[':parent'].chrome['printServers:batchCreatePrintServers'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostAdminDirectoryV1ParentChromePrintServersBatchCreatePrintServers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1)[':parent']['chrome']['printServers:batchCreatePrintServers']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1)[':parent']['chrome']['printServers:batchCreatePrintServers']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAdminDirectoryV1ParentChromePrintServersBatchCreatePrintServersMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdminDirectoryV1ParentChromePrintServersBatchDeletePrintServersMutationKey() {
  return [
    'admin',
    '/admin/directory/v1/:parent/chrome/printServers:batchDeletePrintServers',
    'POST',
  ] as const
}

export function getPostAdminDirectoryV1ParentChromePrintServersBatchDeletePrintServersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1)[':parent']['chrome']['printServers:batchDeletePrintServers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1)[':parent']['chrome']['printServers:batchDeletePrintServers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAdminDirectoryV1ParentChromePrintServersBatchDeletePrintServersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1)[':parent']['chrome']['printServers:batchDeletePrintServers']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1[':parent'].chrome['printServers:batchDeletePrintServers'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostAdminDirectoryV1ParentChromePrintServersBatchDeletePrintServers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1)[':parent']['chrome']['printServers:batchDeletePrintServers']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1)[':parent']['chrome']['printServers:batchDeletePrintServers']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAdminDirectoryV1ParentChromePrintServersBatchDeletePrintServersMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminDirectoryV1ParentChromePrintersQueryKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1)[':parent']['chrome']['printers']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/:parent/chrome/printers', args] as const
}

export function getAdminDirectoryV1ParentChromePrintersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.admin.directory.v1)[':parent']['chrome']['printers']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1)[':parent']['chrome']['printers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.directory.v1)[':parent']['chrome']['printers']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDirectoryV1ParentChromePrintersQueryKey>
  >({
    queryKey: getAdminDirectoryV1ParentChromePrintersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1[':parent'].chrome.printers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminDirectoryV1ParentChromePrinters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.admin.directory.v1)[':parent']['chrome']['printers']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.admin.directory.v1)[':parent']['chrome']['printers']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1)[':parent']['chrome']['printers']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminDirectoryV1ParentChromePrintersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1ParentChromePrintersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdminDirectoryV1ParentChromePrintersMutationKey() {
  return ['admin', '/admin/directory/v1/:parent/chrome/printers', 'POST'] as const
}

export function getPostAdminDirectoryV1ParentChromePrintersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.directory.v1)[':parent']['chrome']['printers']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.directory.v1)[':parent']['chrome']['printers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDirectoryV1ParentChromePrintersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1)[':parent']['chrome']['printers']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1[':parent'].chrome.printers.$post(args, options),
      )
    },
  })
}

export function injectPostAdminDirectoryV1ParentChromePrinters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1)[':parent']['chrome']['printers']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1)[':parent']['chrome']['printers']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminDirectoryV1ParentChromePrintersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdminDirectoryV1ParentChromePrintersBatchCreatePrintersMutationKey() {
  return [
    'admin',
    '/admin/directory/v1/:parent/chrome/printers:batchCreatePrinters',
    'POST',
  ] as const
}

export function getPostAdminDirectoryV1ParentChromePrintersBatchCreatePrintersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1)[':parent']['chrome']['printers:batchCreatePrinters']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1)[':parent']['chrome']['printers:batchCreatePrinters']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDirectoryV1ParentChromePrintersBatchCreatePrintersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1)[':parent']['chrome']['printers:batchCreatePrinters']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1[':parent'].chrome['printers:batchCreatePrinters'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostAdminDirectoryV1ParentChromePrintersBatchCreatePrinters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1)[':parent']['chrome']['printers:batchCreatePrinters']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1)[':parent']['chrome']['printers:batchCreatePrinters']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAdminDirectoryV1ParentChromePrintersBatchCreatePrintersMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdminDirectoryV1ParentChromePrintersBatchDeletePrintersMutationKey() {
  return [
    'admin',
    '/admin/directory/v1/:parent/chrome/printers:batchDeletePrinters',
    'POST',
  ] as const
}

export function getPostAdminDirectoryV1ParentChromePrintersBatchDeletePrintersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1)[':parent']['chrome']['printers:batchDeletePrinters']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.directory.v1)[':parent']['chrome']['printers:batchDeletePrinters']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDirectoryV1ParentChromePrintersBatchDeletePrintersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.directory.v1)[':parent']['chrome']['printers:batchDeletePrinters']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.directory.v1[':parent'].chrome['printers:batchDeletePrinters'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostAdminDirectoryV1ParentChromePrintersBatchDeletePrinters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1)[':parent']['chrome']['printers:batchDeletePrinters']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.directory.v1)[':parent']['chrome']['printers:batchDeletePrinters']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAdminDirectoryV1ParentChromePrintersBatchDeletePrintersMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminDirectoryV1ParentChromePrintersListPrinterModelsQueryKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1)[':parent']['chrome']['printers:listPrinterModels']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/:parent/chrome/printers:listPrinterModels', args] as const
}

export function getAdminDirectoryV1ParentChromePrintersListPrinterModelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1)[':parent']['chrome']['printers:listPrinterModels']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1)[':parent']['chrome']['printers:listPrinterModels']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.directory.v1)[':parent']['chrome']['printers:listPrinterModels']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDirectoryV1ParentChromePrintersListPrinterModelsQueryKey>
  >({
    queryKey: getAdminDirectoryV1ParentChromePrintersListPrinterModelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.directory.v1[':parent'].chrome['printers:listPrinterModels'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminDirectoryV1ParentChromePrintersListPrinterModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.directory.v1)[':parent']['chrome']['printers:listPrinterModels']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.admin.directory.v1)[':parent']['chrome']['printers:listPrinterModels']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.admin.directory.v1)[':parent']['chrome']['printers:listPrinterModels']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminDirectoryV1ParentChromePrintersListPrinterModelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminDirectoryV1ParentChromePrintersListPrinterModelsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdminDirectoryV1ChannelsStopMutationKey() {
  return ['admin', '/admin/directory_v1/channels/stop', 'POST'] as const
}

export function getPostAdminDirectoryV1ChannelsStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.directory_v1.channels.stop.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.admin.directory_v1.channels.stop.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDirectoryV1ChannelsStopMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.directory_v1.channels.stop.$post>) {
      return parseResponse(client.admin.directory_v1.channels.stop.$post(args, options))
    },
  })
}

export function injectPostAdminDirectoryV1ChannelsStop<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.directory_v1.channels.stop.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.admin.directory_v1.channels.stop.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminDirectoryV1ChannelsStopMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
