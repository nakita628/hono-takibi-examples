import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAdminKey() {
  return ['admin'] as const
}

export function getGetAdminDirectoryV1CustomerCustomerIdDevicesChromeosKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/customer/:customerId/devices/chromeos', args] as const
}

export function useGetAdminDirectoryV1CustomerCustomerIdDevicesChromeos<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerIdDevicesChromeosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customerId'].devices.chromeos.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1CustomerCustomerIdDevicesChromeos<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerIdDevicesChromeosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customerId'].devices.chromeos.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdminDirectoryV1CustomerCustomerIdDevicesChromeosMoveDevicesToOuKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customerId/devices/chromeos/moveDevicesToOu',
    'POST',
  ] as const
}

export function usePostAdminDirectoryV1CustomerCustomerIdDevicesChromeosMoveDevicesToOu<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos']['moveDevicesToOu']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAdminDirectoryV1CustomerCustomerIdDevicesChromeosMoveDevicesToOuKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos']['moveDevicesToOu']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.customer[':customerId'].devices.chromeos.moveDevicesToOu.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdKey(
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

export function useGetAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customerId'].devices.chromeos[':deviceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customerId'].devices.chromeos[':deviceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customerId/devices/chromeos/:deviceId',
    'PUT',
  ] as const
}

export function usePutAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.customer[':customerId'].devices.chromeos[':deviceId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customerId/devices/chromeos/:deviceId',
    'PATCH',
  ] as const
}

export function usePatchAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.customer[':customerId'].devices.chromeos[':deviceId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdCommandsCommandIdKey(
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

export function useGetAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdCommandsCommandId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId']['commands'][':commandId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdCommandsCommandIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customerId'].devices.chromeos[':deviceId'].commands[
            ':commandId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdCommandsCommandId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId']['commands'][':commandId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdCommandsCommandIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customerId'].devices.chromeos[':deviceId'].commands[
            ':commandId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdIssueCommandKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customerId/devices/chromeos/:deviceId:issueCommand',
    'POST',
  ] as const
}

export function usePostAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdIssueCommand<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId:issueCommand']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdIssueCommandKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':deviceId:issueCommand']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.customer[':customerId'].devices.chromeos[
            ':deviceId:issueCommand'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminDirectoryV1CustomerCustomerIdDevicesChromeosResourceIdActionKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customerId/devices/chromeos/:resourceId/action',
    'POST',
  ] as const
}

export function usePostAdminDirectoryV1CustomerCustomerIdDevicesChromeosResourceIdAction<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':resourceId']['action']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAdminDirectoryV1CustomerCustomerIdDevicesChromeosResourceIdActionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos'][':resourceId']['action']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.customer[':customerId'].devices.chromeos[
            ':resourceId'
          ].action.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminDirectoryV1CustomerCustomerIdDevicesChromeosBatchChangeStatusKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customerId/devices/chromeos:batchChangeStatus',
    'POST',
  ] as const
}

export function usePostAdminDirectoryV1CustomerCustomerIdDevicesChromeosBatchChangeStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos:batchChangeStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAdminDirectoryV1CustomerCustomerIdDevicesChromeosBatchChangeStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.customer)[':customerId']['devices']['chromeos:batchChangeStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.customer[':customerId'].devices[
            'chromeos:batchChangeStatus'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminDirectoryV1CustomerCustomerIdDevicesMobileKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['devices']['mobile']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/customer/:customerId/devices/mobile', args] as const
}

export function useGetAdminDirectoryV1CustomerCustomerIdDevicesMobile<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['devices']['mobile']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerIdDevicesMobileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customerId'].devices.mobile.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1CustomerCustomerIdDevicesMobile<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['devices']['mobile']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerIdDevicesMobileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customerId'].devices.mobile.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdKey(
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

export function useGetAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['devices']['mobile'][':resourceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customerId'].devices.mobile[':resourceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['devices']['mobile'][':resourceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customerId'].devices.mobile[':resourceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customerId/devices/mobile/:resourceId',
    'DELETE',
  ] as const
}

export function useDeleteAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customerId']['devices']['mobile'][':resourceId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.customer)[':customerId']['devices']['mobile'][':resourceId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.customer[':customerId'].devices.mobile[':resourceId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdActionKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customerId/devices/mobile/:resourceId/action',
    'POST',
  ] as const
}

export function usePostAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdAction<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customerId']['devices']['mobile'][':resourceId']['action']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdActionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.customer)[':customerId']['devices']['mobile'][':resourceId']['action']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.customer[':customerId'].devices.mobile[
            ':resourceId'
          ].action.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminDirectoryV1CustomerCustomerIdOrgunitsKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['orgunits']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/customer/:customerId/orgunits', args] as const
}

export function useGetAdminDirectoryV1CustomerCustomerIdOrgunits<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['orgunits']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerIdOrgunitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customerId'].orgunits.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1CustomerCustomerIdOrgunits<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['orgunits']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerIdOrgunitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customerId'].orgunits.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdminDirectoryV1CustomerCustomerIdOrgunitsKey() {
  return ['admin', '/admin/directory/v1/customer/:customerId/orgunits', 'POST'] as const
}

export function usePostAdminDirectoryV1CustomerCustomerIdOrgunits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customerId']['orgunits']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminDirectoryV1CustomerCustomerIdOrgunitsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.customer)[':customerId']['orgunits']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.customer[':customerId'].orgunits.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['orgunits'][':orgUnitPath']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/customer/:customerId/orgunits/:orgUnitPath', args] as const
}

export function useGetAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['orgunits'][':orgUnitPath']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customerId'].orgunits[':orgUnitPath'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPath<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['orgunits'][':orgUnitPath']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customerId'].orgunits[':orgUnitPath'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathKey() {
  return ['admin', '/admin/directory/v1/customer/:customerId/orgunits/:orgUnitPath', 'PUT'] as const
}

export function usePutAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPath<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customerId']['orgunits'][':orgUnitPath']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.customer)[':customerId']['orgunits'][':orgUnitPath']['$put']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.customer[':customerId'].orgunits[':orgUnitPath'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customerId/orgunits/:orgUnitPath',
    'DELETE',
  ] as const
}

export function useDeleteAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPath<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customerId']['orgunits'][':orgUnitPath']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.customer)[':customerId']['orgunits'][':orgUnitPath']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.customer[':customerId'].orgunits[':orgUnitPath'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customerId/orgunits/:orgUnitPath',
    'PATCH',
  ] as const
}

export function usePatchAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPath<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customerId']['orgunits'][':orgUnitPath']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.customer)[':customerId']['orgunits'][':orgUnitPath']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.customer[':customerId'].orgunits[':orgUnitPath'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminDirectoryV1CustomerCustomerIdSchemasKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['schemas']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/customer/:customerId/schemas', args] as const
}

export function useGetAdminDirectoryV1CustomerCustomerIdSchemas<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['schemas']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerIdSchemasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customerId'].schemas.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1CustomerCustomerIdSchemas<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['schemas']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerIdSchemasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customerId'].schemas.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdminDirectoryV1CustomerCustomerIdSchemasKey() {
  return ['admin', '/admin/directory/v1/customer/:customerId/schemas', 'POST'] as const
}

export function usePostAdminDirectoryV1CustomerCustomerIdSchemas<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.admin.directory.v1.customer)[':customerId']['schemas']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminDirectoryV1CustomerCustomerIdSchemasKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.customer)[':customerId']['schemas']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.customer[':customerId'].schemas.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['schemas'][':schemaKey']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/customer/:customerId/schemas/:schemaKey', args] as const
}

export function useGetAdminDirectoryV1CustomerCustomerIdSchemasSchemaKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['schemas'][':schemaKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customerId'].schemas[':schemaKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1CustomerCustomerIdSchemasSchemaKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customerId']['schemas'][':schemaKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customerId'].schemas[':schemaKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyKey() {
  return ['admin', '/admin/directory/v1/customer/:customerId/schemas/:schemaKey', 'PUT'] as const
}

export function usePutAdminDirectoryV1CustomerCustomerIdSchemasSchemaKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customerId']['schemas'][':schemaKey']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.customer)[':customerId']['schemas'][':schemaKey']['$put']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.customer[':customerId'].schemas[':schemaKey'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyKey() {
  return ['admin', '/admin/directory/v1/customer/:customerId/schemas/:schemaKey', 'DELETE'] as const
}

export function useDeleteAdminDirectoryV1CustomerCustomerIdSchemasSchemaKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customerId']['schemas'][':schemaKey']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.customer)[':customerId']['schemas'][':schemaKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.customer[':customerId'].schemas[':schemaKey'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyKey() {
  return ['admin', '/admin/directory/v1/customer/:customerId/schemas/:schemaKey', 'PATCH'] as const
}

export function usePatchAdminDirectoryV1CustomerCustomerIdSchemasSchemaKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customerId']['schemas'][':schemaKey']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.customer)[':customerId']['schemas'][':schemaKey']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.customer[':customerId'].schemas[':schemaKey'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminDirectoryV1CustomerCustomerDomainaliasesKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['domainaliases']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/customer/:customer/domainaliases', args] as const
}

export function useGetAdminDirectoryV1CustomerCustomerDomainaliases<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['domainaliases']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerDomainaliasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].domainaliases.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1CustomerCustomerDomainaliases<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['domainaliases']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerDomainaliasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].domainaliases.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdminDirectoryV1CustomerCustomerDomainaliasesKey() {
  return ['admin', '/admin/directory/v1/customer/:customer/domainaliases', 'POST'] as const
}

export function usePostAdminDirectoryV1CustomerCustomerDomainaliases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customer']['domainaliases']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminDirectoryV1CustomerCustomerDomainaliasesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.customer)[':customer']['domainaliases']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].domainaliases.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminDirectoryV1CustomerCustomerDomainaliasesDomainAliasNameKey(
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

export function useGetAdminDirectoryV1CustomerCustomerDomainaliasesDomainAliasName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['domainaliases'][':domainAliasName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerDomainaliasesDomainAliasNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].domainaliases[':domainAliasName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1CustomerCustomerDomainaliasesDomainAliasName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['domainaliases'][':domainAliasName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerDomainaliasesDomainAliasNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].domainaliases[':domainAliasName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteAdminDirectoryV1CustomerCustomerDomainaliasesDomainAliasNameKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customer/domainaliases/:domainAliasName',
    'DELETE',
  ] as const
}

export function useDeleteAdminDirectoryV1CustomerCustomerDomainaliasesDomainAliasName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customer']['domainaliases'][':domainAliasName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteAdminDirectoryV1CustomerCustomerDomainaliasesDomainAliasNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.customer)[':customer']['domainaliases'][':domainAliasName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].domainaliases[':domainAliasName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminDirectoryV1CustomerCustomerDomainsKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['domains']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/customer/:customer/domains', args] as const
}

export function useGetAdminDirectoryV1CustomerCustomerDomains<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['domains']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].domains.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1CustomerCustomerDomains<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['domains']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].domains.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdminDirectoryV1CustomerCustomerDomainsKey() {
  return ['admin', '/admin/directory/v1/customer/:customer/domains', 'POST'] as const
}

export function usePostAdminDirectoryV1CustomerCustomerDomains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.admin.directory.v1.customer)[':customer']['domains']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminDirectoryV1CustomerCustomerDomainsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.customer)[':customer']['domains']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].domains.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminDirectoryV1CustomerCustomerDomainsDomainNameKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['domains'][':domainName']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/customer/:customer/domains/:domainName', args] as const
}

export function useGetAdminDirectoryV1CustomerCustomerDomainsDomainName<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['domains'][':domainName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerDomainsDomainNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].domains[':domainName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1CustomerCustomerDomainsDomainName<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['domains'][':domainName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerDomainsDomainNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].domains[':domainName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteAdminDirectoryV1CustomerCustomerDomainsDomainNameKey() {
  return ['admin', '/admin/directory/v1/customer/:customer/domains/:domainName', 'DELETE'] as const
}

export function useDeleteAdminDirectoryV1CustomerCustomerDomainsDomainName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customer']['domains'][':domainName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminDirectoryV1CustomerCustomerDomainsDomainNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.customer)[':customer']['domains'][':domainName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].domains[':domainName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminDirectoryV1CustomerCustomerResourcesBuildingsKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/customer/:customer/resources/buildings', args] as const
}

export function useGetAdminDirectoryV1CustomerCustomerResourcesBuildings<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerResourcesBuildingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].resources.buildings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1CustomerCustomerResourcesBuildings<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerResourcesBuildingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].resources.buildings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdminDirectoryV1CustomerCustomerResourcesBuildingsKey() {
  return ['admin', '/admin/directory/v1/customer/:customer/resources/buildings', 'POST'] as const
}

export function usePostAdminDirectoryV1CustomerCustomerResourcesBuildings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminDirectoryV1CustomerCustomerResourcesBuildingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].resources.buildings.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdKey(
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

export function useGetAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings'][':buildingId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].resources.buildings[':buildingId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings'][':buildingId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].resources.buildings[':buildingId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customer/resources/buildings/:buildingId',
    'PUT',
  ] as const
}

export function usePutAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings'][':buildingId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings'][':buildingId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].resources.buildings[':buildingId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customer/resources/buildings/:buildingId',
    'DELETE',
  ] as const
}

export function useDeleteAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings'][':buildingId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings'][':buildingId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].resources.buildings[
            ':buildingId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customer/resources/buildings/:buildingId',
    'PATCH',
  ] as const
}

export function usePatchAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings'][':buildingId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.customer)[':customer']['resources']['buildings'][':buildingId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].resources.buildings[':buildingId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminDirectoryV1CustomerCustomerResourcesCalendarsKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/customer/:customer/resources/calendars', args] as const
}

export function useGetAdminDirectoryV1CustomerCustomerResourcesCalendars<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerResourcesCalendarsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].resources.calendars.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1CustomerCustomerResourcesCalendars<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerResourcesCalendarsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].resources.calendars.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdminDirectoryV1CustomerCustomerResourcesCalendarsKey() {
  return ['admin', '/admin/directory/v1/customer/:customer/resources/calendars', 'POST'] as const
}

export function usePostAdminDirectoryV1CustomerCustomerResourcesCalendars<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminDirectoryV1CustomerCustomerResourcesCalendarsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].resources.calendars.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdKey(
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

export function useGetAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars'][':calendarResourceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].resources.calendars[
            ':calendarResourceId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars'][':calendarResourceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].resources.calendars[
            ':calendarResourceId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customer/resources/calendars/:calendarResourceId',
    'PUT',
  ] as const
}

export function usePutAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars'][':calendarResourceId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars'][':calendarResourceId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].resources.calendars[
            ':calendarResourceId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customer/resources/calendars/:calendarResourceId',
    'DELETE',
  ] as const
}

export function useDeleteAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars'][':calendarResourceId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars'][':calendarResourceId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].resources.calendars[
            ':calendarResourceId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customer/resources/calendars/:calendarResourceId',
    'PATCH',
  ] as const
}

export function usePatchAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars'][':calendarResourceId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.customer)[':customer']['resources']['calendars'][':calendarResourceId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].resources.calendars[
            ':calendarResourceId'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminDirectoryV1CustomerCustomerResourcesFeaturesKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['features']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/customer/:customer/resources/features', args] as const
}

export function useGetAdminDirectoryV1CustomerCustomerResourcesFeatures<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['features']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerResourcesFeaturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].resources.features.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1CustomerCustomerResourcesFeatures<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['features']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerResourcesFeaturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].resources.features.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdminDirectoryV1CustomerCustomerResourcesFeaturesKey() {
  return ['admin', '/admin/directory/v1/customer/:customer/resources/features', 'POST'] as const
}

export function usePostAdminDirectoryV1CustomerCustomerResourcesFeatures<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customer']['resources']['features']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminDirectoryV1CustomerCustomerResourcesFeaturesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.customer)[':customer']['resources']['features']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].resources.features.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyKey(
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

export function useGetAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['features'][':featureKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].resources.features[':featureKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['resources']['features'][':featureKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].resources.features[':featureKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customer/resources/features/:featureKey',
    'PUT',
  ] as const
}

export function usePutAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customer']['resources']['features'][':featureKey']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.customer)[':customer']['resources']['features'][':featureKey']['$put']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].resources.features[':featureKey'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customer/resources/features/:featureKey',
    'DELETE',
  ] as const
}

export function useDeleteAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customer']['resources']['features'][':featureKey']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.customer)[':customer']['resources']['features'][':featureKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].resources.features[':featureKey'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customer/resources/features/:featureKey',
    'PATCH',
  ] as const
}

export function usePatchAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customer']['resources']['features'][':featureKey']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.customer)[':customer']['resources']['features'][':featureKey']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].resources.features[':featureKey'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminDirectoryV1CustomerCustomerResourcesFeaturesOldNameRenameKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customer/resources/features/:oldName/rename',
    'POST',
  ] as const
}

export function usePostAdminDirectoryV1CustomerCustomerResourcesFeaturesOldNameRename<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customer']['resources']['features'][':oldName']['rename']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAdminDirectoryV1CustomerCustomerResourcesFeaturesOldNameRenameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.customer)[':customer']['resources']['features'][':oldName']['rename']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].resources.features[
            ':oldName'
          ].rename.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminDirectoryV1CustomerCustomerRoleassignmentsKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['roleassignments']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/customer/:customer/roleassignments', args] as const
}

export function useGetAdminDirectoryV1CustomerCustomerRoleassignments<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['roleassignments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerRoleassignmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].roleassignments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1CustomerCustomerRoleassignments<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['roleassignments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerRoleassignmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].roleassignments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdminDirectoryV1CustomerCustomerRoleassignmentsKey() {
  return ['admin', '/admin/directory/v1/customer/:customer/roleassignments', 'POST'] as const
}

export function usePostAdminDirectoryV1CustomerCustomerRoleassignments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customer']['roleassignments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminDirectoryV1CustomerCustomerRoleassignmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.customer)[':customer']['roleassignments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].roleassignments.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminDirectoryV1CustomerCustomerRoleassignmentsRoleAssignmentIdKey(
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

export function useGetAdminDirectoryV1CustomerCustomerRoleassignmentsRoleAssignmentId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['roleassignments'][':roleAssignmentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerRoleassignmentsRoleAssignmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].roleassignments[':roleAssignmentId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1CustomerCustomerRoleassignmentsRoleAssignmentId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['roleassignments'][':roleAssignmentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerRoleassignmentsRoleAssignmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].roleassignments[':roleAssignmentId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteAdminDirectoryV1CustomerCustomerRoleassignmentsRoleAssignmentIdKey() {
  return [
    'admin',
    '/admin/directory/v1/customer/:customer/roleassignments/:roleAssignmentId',
    'DELETE',
  ] as const
}

export function useDeleteAdminDirectoryV1CustomerCustomerRoleassignmentsRoleAssignmentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customer']['roleassignments'][':roleAssignmentId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteAdminDirectoryV1CustomerCustomerRoleassignmentsRoleAssignmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.customer)[':customer']['roleassignments'][':roleAssignmentId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].roleassignments[
            ':roleAssignmentId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminDirectoryV1CustomerCustomerRolesKey(
  args: InferRequestType<(typeof client.admin.directory.v1.customer)[':customer']['roles']['$get']>,
) {
  return ['admin', '/admin/directory/v1/customer/:customer/roles', args] as const
}

export function useGetAdminDirectoryV1CustomerCustomerRoles<TError = unknown>(
  args: InferRequestType<(typeof client.admin.directory.v1.customer)[':customer']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.directory.v1.customer)[':customer']['roles']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.directory.v1.customer)[':customer']['roles']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].roles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1CustomerCustomerRoles<TError = unknown>(
  args: InferRequestType<(typeof client.admin.directory.v1.customer)[':customer']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.directory.v1.customer)[':customer']['roles']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.directory.v1.customer)[':customer']['roles']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].roles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdminDirectoryV1CustomerCustomerRolesKey() {
  return ['admin', '/admin/directory/v1/customer/:customer/roles', 'POST'] as const
}

export function usePostAdminDirectoryV1CustomerCustomerRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.admin.directory.v1.customer)[':customer']['roles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminDirectoryV1CustomerCustomerRolesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.customer)[':customer']['roles']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].roles.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminDirectoryV1CustomerCustomerRolesALLPrivilegesKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['roles']['ALL']['privileges']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/customer/:customer/roles/ALL/privileges', args] as const
}

export function useGetAdminDirectoryV1CustomerCustomerRolesALLPrivileges<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['roles']['ALL']['privileges']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerRolesALLPrivilegesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].roles.ALL.privileges.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1CustomerCustomerRolesALLPrivileges<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['roles']['ALL']['privileges']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerRolesALLPrivilegesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].roles.ALL.privileges.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAdminDirectoryV1CustomerCustomerRolesRoleIdKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['roles'][':roleId']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/customer/:customer/roles/:roleId', args] as const
}

export function useGetAdminDirectoryV1CustomerCustomerRolesRoleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['roles'][':roleId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerRolesRoleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].roles[':roleId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1CustomerCustomerRolesRoleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.customer)[':customer']['roles'][':roleId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomerCustomerRolesRoleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].roles[':roleId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAdminDirectoryV1CustomerCustomerRolesRoleIdKey() {
  return ['admin', '/admin/directory/v1/customer/:customer/roles/:roleId', 'PUT'] as const
}

export function usePutAdminDirectoryV1CustomerCustomerRolesRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customer']['roles'][':roleId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminDirectoryV1CustomerCustomerRolesRoleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.customer)[':customer']['roles'][':roleId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].roles[':roleId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminDirectoryV1CustomerCustomerRolesRoleIdKey() {
  return ['admin', '/admin/directory/v1/customer/:customer/roles/:roleId', 'DELETE'] as const
}

export function useDeleteAdminDirectoryV1CustomerCustomerRolesRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customer']['roles'][':roleId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminDirectoryV1CustomerCustomerRolesRoleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.customer)[':customer']['roles'][':roleId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].roles[':roleId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchAdminDirectoryV1CustomerCustomerRolesRoleIdKey() {
  return ['admin', '/admin/directory/v1/customer/:customer/roles/:roleId', 'PATCH'] as const
}

export function usePatchAdminDirectoryV1CustomerCustomerRolesRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.customer)[':customer']['roles'][':roleId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAdminDirectoryV1CustomerCustomerRolesRoleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.customer)[':customer']['roles'][':roleId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.customer[':customer'].roles[':roleId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminDirectoryV1CustomersCustomerKeyKey(
  args: InferRequestType<(typeof client.admin.directory.v1.customers)[':customerKey']['$get']>,
) {
  return ['admin', '/admin/directory/v1/customers/:customerKey', args] as const
}

export function useGetAdminDirectoryV1CustomersCustomerKey<TError = unknown>(
  args: InferRequestType<(typeof client.admin.directory.v1.customers)[':customerKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.directory.v1.customers)[':customerKey']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomersCustomerKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.directory.v1.customers)[':customerKey']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customers[':customerKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1CustomersCustomerKey<TError = unknown>(
  args: InferRequestType<(typeof client.admin.directory.v1.customers)[':customerKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.directory.v1.customers)[':customerKey']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1CustomersCustomerKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.directory.v1.customers)[':customerKey']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.customers[':customerKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAdminDirectoryV1CustomersCustomerKeyKey() {
  return ['admin', '/admin/directory/v1/customers/:customerKey', 'PUT'] as const
}

export function usePutAdminDirectoryV1CustomersCustomerKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.directory.v1.customers)[':customerKey']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.directory.v1.customers)[':customerKey']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminDirectoryV1CustomersCustomerKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.customers)[':customerKey']['$put']
          >
        },
      ) =>
        parseResponse(client.admin.directory.v1.customers[':customerKey'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAdminDirectoryV1CustomersCustomerKeyKey() {
  return ['admin', '/admin/directory/v1/customers/:customerKey', 'PATCH'] as const
}

export function usePatchAdminDirectoryV1CustomersCustomerKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.admin.directory.v1.customers)[':customerKey']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAdminDirectoryV1CustomersCustomerKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.customers)[':customerKey']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.customers[':customerKey'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminDirectoryV1GroupsKey(
  args: InferRequestType<typeof client.admin.directory.v1.groups.$get>,
) {
  return ['admin', '/admin/directory/v1/groups', args] as const
}

export function useGetAdminDirectoryV1Groups<TError = unknown>(
  args: InferRequestType<typeof client.admin.directory.v1.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.directory.v1.groups.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1GroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.directory.v1.groups.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.directory.v1.groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1Groups<TError = unknown>(
  args: InferRequestType<typeof client.admin.directory.v1.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.directory.v1.groups.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1GroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.directory.v1.groups.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.directory.v1.groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminDirectoryV1GroupsKey() {
  return ['admin', '/admin/directory/v1/groups', 'POST'] as const
}

export function usePostAdminDirectoryV1Groups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.directory.v1.groups.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.directory.v1.groups.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminDirectoryV1GroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.directory.v1.groups.$post> },
      ) => parseResponse(client.admin.directory.v1.groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminDirectoryV1GroupsGroupKeyKey(
  args: InferRequestType<(typeof client.admin.directory.v1.groups)[':groupKey']['$get']>,
) {
  return ['admin', '/admin/directory/v1/groups/:groupKey', args] as const
}

export function useGetAdminDirectoryV1GroupsGroupKey<TError = unknown>(
  args: InferRequestType<(typeof client.admin.directory.v1.groups)[':groupKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.directory.v1.groups)[':groupKey']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1GroupsGroupKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.directory.v1.groups)[':groupKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin.directory.v1.groups[':groupKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1GroupsGroupKey<TError = unknown>(
  args: InferRequestType<(typeof client.admin.directory.v1.groups)[':groupKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.directory.v1.groups)[':groupKey']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1GroupsGroupKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.directory.v1.groups)[':groupKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin.directory.v1.groups[':groupKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAdminDirectoryV1GroupsGroupKeyKey() {
  return ['admin', '/admin/directory/v1/groups/:groupKey', 'PUT'] as const
}

export function usePutAdminDirectoryV1GroupsGroupKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.directory.v1.groups)[':groupKey']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.directory.v1.groups)[':groupKey']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminDirectoryV1GroupsGroupKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin.directory.v1.groups)[':groupKey']['$put']>
        },
      ) => parseResponse(client.admin.directory.v1.groups[':groupKey'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminDirectoryV1GroupsGroupKeyKey() {
  return ['admin', '/admin/directory/v1/groups/:groupKey', 'DELETE'] as const
}

export function useDeleteAdminDirectoryV1GroupsGroupKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.directory.v1.groups)[':groupKey']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.directory.v1.groups)[':groupKey']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminDirectoryV1GroupsGroupKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin.directory.v1.groups)[':groupKey']['$delete']>
        },
      ) => parseResponse(client.admin.directory.v1.groups[':groupKey'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAdminDirectoryV1GroupsGroupKeyKey() {
  return ['admin', '/admin/directory/v1/groups/:groupKey', 'PATCH'] as const
}

export function usePatchAdminDirectoryV1GroupsGroupKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.directory.v1.groups)[':groupKey']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.directory.v1.groups)[':groupKey']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAdminDirectoryV1GroupsGroupKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin.directory.v1.groups)[':groupKey']['$patch']>
        },
      ) => parseResponse(client.admin.directory.v1.groups[':groupKey'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminDirectoryV1GroupsGroupKeyAliasesKey(
  args: InferRequestType<(typeof client.admin.directory.v1.groups)[':groupKey']['aliases']['$get']>,
) {
  return ['admin', '/admin/directory/v1/groups/:groupKey/aliases', args] as const
}

export function useGetAdminDirectoryV1GroupsGroupKeyAliases<TError = unknown>(
  args: InferRequestType<(typeof client.admin.directory.v1.groups)[':groupKey']['aliases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.directory.v1.groups)[':groupKey']['aliases']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1GroupsGroupKeyAliasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.directory.v1.groups)[':groupKey']['aliases']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.groups[':groupKey'].aliases.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1GroupsGroupKeyAliases<TError = unknown>(
  args: InferRequestType<(typeof client.admin.directory.v1.groups)[':groupKey']['aliases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.directory.v1.groups)[':groupKey']['aliases']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1GroupsGroupKeyAliasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.directory.v1.groups)[':groupKey']['aliases']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.groups[':groupKey'].aliases.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdminDirectoryV1GroupsGroupKeyAliasesKey() {
  return ['admin', '/admin/directory/v1/groups/:groupKey/aliases', 'POST'] as const
}

export function usePostAdminDirectoryV1GroupsGroupKeyAliases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.admin.directory.v1.groups)[':groupKey']['aliases']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminDirectoryV1GroupsGroupKeyAliasesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.groups)[':groupKey']['aliases']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.groups[':groupKey'].aliases.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminDirectoryV1GroupsGroupKeyAliasesAliasKey() {
  return ['admin', '/admin/directory/v1/groups/:groupKey/aliases/:alias', 'DELETE'] as const
}

export function useDeleteAdminDirectoryV1GroupsGroupKeyAliasesAlias<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.groups)[':groupKey']['aliases'][':alias']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminDirectoryV1GroupsGroupKeyAliasesAliasKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.groups)[':groupKey']['aliases'][':alias']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.groups[':groupKey'].aliases[':alias'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminDirectoryV1GroupsGroupKeyHasMemberMemberKeyKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.groups)[':groupKey']['hasMember'][':memberKey']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/groups/:groupKey/hasMember/:memberKey', args] as const
}

export function useGetAdminDirectoryV1GroupsGroupKeyHasMemberMemberKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.groups)[':groupKey']['hasMember'][':memberKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1GroupsGroupKeyHasMemberMemberKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.groups[':groupKey'].hasMember[':memberKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1GroupsGroupKeyHasMemberMemberKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.groups)[':groupKey']['hasMember'][':memberKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1GroupsGroupKeyHasMemberMemberKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.groups[':groupKey'].hasMember[':memberKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAdminDirectoryV1GroupsGroupKeyMembersKey(
  args: InferRequestType<(typeof client.admin.directory.v1.groups)[':groupKey']['members']['$get']>,
) {
  return ['admin', '/admin/directory/v1/groups/:groupKey/members', args] as const
}

export function useGetAdminDirectoryV1GroupsGroupKeyMembers<TError = unknown>(
  args: InferRequestType<(typeof client.admin.directory.v1.groups)[':groupKey']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.directory.v1.groups)[':groupKey']['members']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1GroupsGroupKeyMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.directory.v1.groups)[':groupKey']['members']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.groups[':groupKey'].members.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1GroupsGroupKeyMembers<TError = unknown>(
  args: InferRequestType<(typeof client.admin.directory.v1.groups)[':groupKey']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.directory.v1.groups)[':groupKey']['members']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1GroupsGroupKeyMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.directory.v1.groups)[':groupKey']['members']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.groups[':groupKey'].members.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdminDirectoryV1GroupsGroupKeyMembersKey() {
  return ['admin', '/admin/directory/v1/groups/:groupKey/members', 'POST'] as const
}

export function usePostAdminDirectoryV1GroupsGroupKeyMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.admin.directory.v1.groups)[':groupKey']['members']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminDirectoryV1GroupsGroupKeyMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.groups)[':groupKey']['members']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.groups[':groupKey'].members.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminDirectoryV1GroupsGroupKeyMembersMemberKeyKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.groups)[':groupKey']['members'][':memberKey']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/groups/:groupKey/members/:memberKey', args] as const
}

export function useGetAdminDirectoryV1GroupsGroupKeyMembersMemberKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.groups)[':groupKey']['members'][':memberKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1GroupsGroupKeyMembersMemberKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.groups[':groupKey'].members[':memberKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1GroupsGroupKeyMembersMemberKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.groups)[':groupKey']['members'][':memberKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1GroupsGroupKeyMembersMemberKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.groups[':groupKey'].members[':memberKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAdminDirectoryV1GroupsGroupKeyMembersMemberKeyKey() {
  return ['admin', '/admin/directory/v1/groups/:groupKey/members/:memberKey', 'PUT'] as const
}

export function usePutAdminDirectoryV1GroupsGroupKeyMembersMemberKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.groups)[':groupKey']['members'][':memberKey']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminDirectoryV1GroupsGroupKeyMembersMemberKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.groups)[':groupKey']['members'][':memberKey']['$put']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.groups[':groupKey'].members[':memberKey'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminDirectoryV1GroupsGroupKeyMembersMemberKeyKey() {
  return ['admin', '/admin/directory/v1/groups/:groupKey/members/:memberKey', 'DELETE'] as const
}

export function useDeleteAdminDirectoryV1GroupsGroupKeyMembersMemberKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.groups)[':groupKey']['members'][':memberKey']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminDirectoryV1GroupsGroupKeyMembersMemberKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.groups)[':groupKey']['members'][':memberKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.groups[':groupKey'].members[':memberKey'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchAdminDirectoryV1GroupsGroupKeyMembersMemberKeyKey() {
  return ['admin', '/admin/directory/v1/groups/:groupKey/members/:memberKey', 'PATCH'] as const
}

export function usePatchAdminDirectoryV1GroupsGroupKeyMembersMemberKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.groups)[':groupKey']['members'][':memberKey']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAdminDirectoryV1GroupsGroupKeyMembersMemberKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.groups)[':groupKey']['members'][':memberKey']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.groups[':groupKey'].members[':memberKey'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminDirectoryV1UsersKey(
  args: InferRequestType<typeof client.admin.directory.v1.users.$get>,
) {
  return ['admin', '/admin/directory/v1/users', args] as const
}

export function useGetAdminDirectoryV1Users<TError = unknown>(
  args: InferRequestType<typeof client.admin.directory.v1.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.directory.v1.users.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1UsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.directory.v1.users.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.directory.v1.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1Users<TError = unknown>(
  args: InferRequestType<typeof client.admin.directory.v1.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.directory.v1.users.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1UsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.directory.v1.users.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.directory.v1.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminDirectoryV1UsersKey() {
  return ['admin', '/admin/directory/v1/users', 'POST'] as const
}

export function usePostAdminDirectoryV1Users<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.directory.v1.users.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.directory.v1.users.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminDirectoryV1UsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.directory.v1.users.$post> },
      ) => parseResponse(client.admin.directory.v1.users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminDirectoryV1UsersWatchKey() {
  return ['admin', '/admin/directory/v1/users/watch', 'POST'] as const
}

export function usePostAdminDirectoryV1UsersWatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.directory.v1.users.watch.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.directory.v1.users.watch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminDirectoryV1UsersWatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.directory.v1.users.watch.$post> },
      ) => parseResponse(client.admin.directory.v1.users.watch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminDirectoryV1UsersUserKeyKey(
  args: InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['$get']>,
) {
  return ['admin', '/admin/directory/v1/users/:userKey', args] as const
}

export function useGetAdminDirectoryV1UsersUserKey<TError = unknown>(
  args: InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1UsersUserKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin.directory.v1.users[':userKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1UsersUserKey<TError = unknown>(
  args: InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1UsersUserKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin.directory.v1.users[':userKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAdminDirectoryV1UsersUserKeyKey() {
  return ['admin', '/admin/directory/v1/users/:userKey', 'PUT'] as const
}

export function usePutAdminDirectoryV1UsersUserKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminDirectoryV1UsersUserKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['$put']> },
      ) => parseResponse(client.admin.directory.v1.users[':userKey'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminDirectoryV1UsersUserKeyKey() {
  return ['admin', '/admin/directory/v1/users/:userKey', 'DELETE'] as const
}

export function useDeleteAdminDirectoryV1UsersUserKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminDirectoryV1UsersUserKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['$delete']>
        },
      ) => parseResponse(client.admin.directory.v1.users[':userKey'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAdminDirectoryV1UsersUserKeyKey() {
  return ['admin', '/admin/directory/v1/users/:userKey', 'PATCH'] as const
}

export function usePatchAdminDirectoryV1UsersUserKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAdminDirectoryV1UsersUserKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['$patch']>
        },
      ) => parseResponse(client.admin.directory.v1.users[':userKey'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminDirectoryV1UsersUserKeyAliasesKey(
  args: InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['aliases']['$get']>,
) {
  return ['admin', '/admin/directory/v1/users/:userKey/aliases', args] as const
}

export function useGetAdminDirectoryV1UsersUserKeyAliases<TError = unknown>(
  args: InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['aliases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['aliases']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1UsersUserKeyAliasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['aliases']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.users[':userKey'].aliases.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1UsersUserKeyAliases<TError = unknown>(
  args: InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['aliases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['aliases']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1UsersUserKeyAliasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['aliases']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.users[':userKey'].aliases.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdminDirectoryV1UsersUserKeyAliasesKey() {
  return ['admin', '/admin/directory/v1/users/:userKey/aliases', 'POST'] as const
}

export function usePostAdminDirectoryV1UsersUserKeyAliases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['aliases']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminDirectoryV1UsersUserKeyAliasesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.users)[':userKey']['aliases']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.users[':userKey'].aliases.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminDirectoryV1UsersUserKeyAliasesWatchKey() {
  return ['admin', '/admin/directory/v1/users/:userKey/aliases/watch', 'POST'] as const
}

export function usePostAdminDirectoryV1UsersUserKeyAliasesWatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.users)[':userKey']['aliases']['watch']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminDirectoryV1UsersUserKeyAliasesWatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.users)[':userKey']['aliases']['watch']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.users[':userKey'].aliases.watch.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminDirectoryV1UsersUserKeyAliasesAliasKey() {
  return ['admin', '/admin/directory/v1/users/:userKey/aliases/:alias', 'DELETE'] as const
}

export function useDeleteAdminDirectoryV1UsersUserKeyAliasesAlias<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.users)[':userKey']['aliases'][':alias']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminDirectoryV1UsersUserKeyAliasesAliasKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.users)[':userKey']['aliases'][':alias']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.users[':userKey'].aliases[':alias'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminDirectoryV1UsersUserKeyAspsKey(
  args: InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['asps']['$get']>,
) {
  return ['admin', '/admin/directory/v1/users/:userKey/asps', args] as const
}

export function useGetAdminDirectoryV1UsersUserKeyAsps<TError = unknown>(
  args: InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['asps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['asps']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1UsersUserKeyAspsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['asps']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin.directory.v1.users[':userKey'].asps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1UsersUserKeyAsps<TError = unknown>(
  args: InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['asps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['asps']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1UsersUserKeyAspsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['asps']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin.directory.v1.users[':userKey'].asps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminDirectoryV1UsersUserKeyAspsCodeIdKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.users)[':userKey']['asps'][':codeId']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/users/:userKey/asps/:codeId', args] as const
}

export function useGetAdminDirectoryV1UsersUserKeyAspsCodeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.users)[':userKey']['asps'][':codeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1UsersUserKeyAspsCodeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.users[':userKey'].asps[':codeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1UsersUserKeyAspsCodeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.users)[':userKey']['asps'][':codeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1UsersUserKeyAspsCodeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.users[':userKey'].asps[':codeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteAdminDirectoryV1UsersUserKeyAspsCodeIdKey() {
  return ['admin', '/admin/directory/v1/users/:userKey/asps/:codeId', 'DELETE'] as const
}

export function useDeleteAdminDirectoryV1UsersUserKeyAspsCodeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.users)[':userKey']['asps'][':codeId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminDirectoryV1UsersUserKeyAspsCodeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.users)[':userKey']['asps'][':codeId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.users[':userKey'].asps[':codeId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminDirectoryV1UsersUserKeyMakeAdminKey() {
  return ['admin', '/admin/directory/v1/users/:userKey/makeAdmin', 'POST'] as const
}

export function usePostAdminDirectoryV1UsersUserKeyMakeAdmin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['makeAdmin']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminDirectoryV1UsersUserKeyMakeAdminKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.users)[':userKey']['makeAdmin']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.users[':userKey'].makeAdmin.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminDirectoryV1UsersUserKeyPhotosThumbnailKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.users)[':userKey']['photos']['thumbnail']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/users/:userKey/photos/thumbnail', args] as const
}

export function useGetAdminDirectoryV1UsersUserKeyPhotosThumbnail<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.users)[':userKey']['photos']['thumbnail']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1UsersUserKeyPhotosThumbnailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.users[':userKey'].photos.thumbnail.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1UsersUserKeyPhotosThumbnail<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.users)[':userKey']['photos']['thumbnail']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1UsersUserKeyPhotosThumbnailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.users[':userKey'].photos.thumbnail.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAdminDirectoryV1UsersUserKeyPhotosThumbnailKey() {
  return ['admin', '/admin/directory/v1/users/:userKey/photos/thumbnail', 'PUT'] as const
}

export function usePutAdminDirectoryV1UsersUserKeyPhotosThumbnail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.users)[':userKey']['photos']['thumbnail']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminDirectoryV1UsersUserKeyPhotosThumbnailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.users)[':userKey']['photos']['thumbnail']['$put']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.users[':userKey'].photos.thumbnail.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminDirectoryV1UsersUserKeyPhotosThumbnailKey() {
  return ['admin', '/admin/directory/v1/users/:userKey/photos/thumbnail', 'DELETE'] as const
}

export function useDeleteAdminDirectoryV1UsersUserKeyPhotosThumbnail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.users)[':userKey']['photos']['thumbnail']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminDirectoryV1UsersUserKeyPhotosThumbnailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.users)[':userKey']['photos']['thumbnail']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.users[':userKey'].photos.thumbnail.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchAdminDirectoryV1UsersUserKeyPhotosThumbnailKey() {
  return ['admin', '/admin/directory/v1/users/:userKey/photos/thumbnail', 'PATCH'] as const
}

export function usePatchAdminDirectoryV1UsersUserKeyPhotosThumbnail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.users)[':userKey']['photos']['thumbnail']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAdminDirectoryV1UsersUserKeyPhotosThumbnailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.users)[':userKey']['photos']['thumbnail']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.users[':userKey'].photos.thumbnail.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminDirectoryV1UsersUserKeySignOutKey() {
  return ['admin', '/admin/directory/v1/users/:userKey/signOut', 'POST'] as const
}

export function usePostAdminDirectoryV1UsersUserKeySignOut<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['signOut']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminDirectoryV1UsersUserKeySignOutKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.users)[':userKey']['signOut']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.users[':userKey'].signOut.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminDirectoryV1UsersUserKeyTokensKey(
  args: InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['tokens']['$get']>,
) {
  return ['admin', '/admin/directory/v1/users/:userKey/tokens', args] as const
}

export function useGetAdminDirectoryV1UsersUserKeyTokens<TError = unknown>(
  args: InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['tokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['tokens']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1UsersUserKeyTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['tokens']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin.directory.v1.users[':userKey'].tokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1UsersUserKeyTokens<TError = unknown>(
  args: InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['tokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['tokens']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1UsersUserKeyTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.directory.v1.users)[':userKey']['tokens']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin.directory.v1.users[':userKey'].tokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminDirectoryV1UsersUserKeyTokensClientIdKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.users)[':userKey']['tokens'][':clientId']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/users/:userKey/tokens/:clientId', args] as const
}

export function useGetAdminDirectoryV1UsersUserKeyTokensClientId<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.users)[':userKey']['tokens'][':clientId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1UsersUserKeyTokensClientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.users[':userKey'].tokens[':clientId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1UsersUserKeyTokensClientId<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.users)[':userKey']['tokens'][':clientId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1UsersUserKeyTokensClientIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.users[':userKey'].tokens[':clientId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteAdminDirectoryV1UsersUserKeyTokensClientIdKey() {
  return ['admin', '/admin/directory/v1/users/:userKey/tokens/:clientId', 'DELETE'] as const
}

export function useDeleteAdminDirectoryV1UsersUserKeyTokensClientId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.users)[':userKey']['tokens'][':clientId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminDirectoryV1UsersUserKeyTokensClientIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.users)[':userKey']['tokens'][':clientId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.users[':userKey'].tokens[':clientId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminDirectoryV1UsersUserKeyTwoStepVerificationTurnOffKey() {
  return [
    'admin',
    '/admin/directory/v1/users/:userKey/twoStepVerification/turnOff',
    'POST',
  ] as const
}

export function usePostAdminDirectoryV1UsersUserKeyTwoStepVerificationTurnOff<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.users)[':userKey']['twoStepVerification']['turnOff']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminDirectoryV1UsersUserKeyTwoStepVerificationTurnOffKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.users)[':userKey']['twoStepVerification']['turnOff']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.users[':userKey'].twoStepVerification.turnOff.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminDirectoryV1UsersUserKeyUndeleteKey() {
  return ['admin', '/admin/directory/v1/users/:userKey/undelete', 'POST'] as const
}

export function usePostAdminDirectoryV1UsersUserKeyUndelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.admin.directory.v1.users)[':userKey']['undelete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminDirectoryV1UsersUserKeyUndeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.users)[':userKey']['undelete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.users[':userKey'].undelete.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminDirectoryV1UsersUserKeyVerificationCodesKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1.users)[':userKey']['verificationCodes']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/users/:userKey/verificationCodes', args] as const
}

export function useGetAdminDirectoryV1UsersUserKeyVerificationCodes<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.users)[':userKey']['verificationCodes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1UsersUserKeyVerificationCodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.users[':userKey'].verificationCodes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1UsersUserKeyVerificationCodes<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1.users)[':userKey']['verificationCodes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1UsersUserKeyVerificationCodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1.users[':userKey'].verificationCodes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdminDirectoryV1UsersUserKeyVerificationCodesGenerateKey() {
  return ['admin', '/admin/directory/v1/users/:userKey/verificationCodes/generate', 'POST'] as const
}

export function usePostAdminDirectoryV1UsersUserKeyVerificationCodesGenerate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.users)[':userKey']['verificationCodes']['generate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminDirectoryV1UsersUserKeyVerificationCodesGenerateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.users)[':userKey']['verificationCodes']['generate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.users[':userKey'].verificationCodes.generate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminDirectoryV1UsersUserKeyVerificationCodesInvalidateKey() {
  return [
    'admin',
    '/admin/directory/v1/users/:userKey/verificationCodes/invalidate',
    'POST',
  ] as const
}

export function usePostAdminDirectoryV1UsersUserKeyVerificationCodesInvalidate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1.users)[':userKey']['verificationCodes']['invalidate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminDirectoryV1UsersUserKeyVerificationCodesInvalidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1.users)[':userKey']['verificationCodes']['invalidate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1.users[':userKey'].verificationCodes.invalidate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminDirectoryV1NameKey(
  args: InferRequestType<(typeof client.admin.directory.v1)[':name']['$get']>,
) {
  return ['admin', '/admin/directory/v1/:name', args] as const
}

export function useGetAdminDirectoryV1Name<TError = unknown>(
  args: InferRequestType<(typeof client.admin.directory.v1)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.directory.v1)[':name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1NameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.directory.v1)[':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.directory.v1[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1Name<TError = unknown>(
  args: InferRequestType<(typeof client.admin.directory.v1)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.directory.v1)[':name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1NameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.directory.v1)[':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.directory.v1[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAdminDirectoryV1NameKey() {
  return ['admin', '/admin/directory/v1/:name', 'DELETE'] as const
}

export function useDeleteAdminDirectoryV1Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.directory.v1)[':name']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.directory.v1)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminDirectoryV1NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.directory.v1)[':name']['$delete']> },
      ) => parseResponse(client.admin.directory.v1[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAdminDirectoryV1NameKey() {
  return ['admin', '/admin/directory/v1/:name', 'PATCH'] as const
}

export function usePatchAdminDirectoryV1Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.directory.v1)[':name']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.directory.v1)[':name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAdminDirectoryV1NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.directory.v1)[':name']['$patch']> },
      ) => parseResponse(client.admin.directory.v1[':name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminDirectoryV1ParentChromePrintServersKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1)[':parent']['chrome']['printServers']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/:parent/chrome/printServers', args] as const
}

export function useGetAdminDirectoryV1ParentChromePrintServers<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1)[':parent']['chrome']['printServers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1ParentChromePrintServersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1[':parent'].chrome.printServers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1ParentChromePrintServers<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1)[':parent']['chrome']['printServers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1ParentChromePrintServersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1[':parent'].chrome.printServers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdminDirectoryV1ParentChromePrintServersKey() {
  return ['admin', '/admin/directory/v1/:parent/chrome/printServers', 'POST'] as const
}

export function usePostAdminDirectoryV1ParentChromePrintServers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1)[':parent']['chrome']['printServers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminDirectoryV1ParentChromePrintServersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1)[':parent']['chrome']['printServers']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1[':parent'].chrome.printServers.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminDirectoryV1ParentChromePrintServersBatchCreatePrintServersKey() {
  return [
    'admin',
    '/admin/directory/v1/:parent/chrome/printServers:batchCreatePrintServers',
    'POST',
  ] as const
}

export function usePostAdminDirectoryV1ParentChromePrintServersBatchCreatePrintServers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1)[':parent']['chrome']['printServers:batchCreatePrintServers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAdminDirectoryV1ParentChromePrintServersBatchCreatePrintServersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1)[':parent']['chrome']['printServers:batchCreatePrintServers']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1[':parent'].chrome['printServers:batchCreatePrintServers'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminDirectoryV1ParentChromePrintServersBatchDeletePrintServersKey() {
  return [
    'admin',
    '/admin/directory/v1/:parent/chrome/printServers:batchDeletePrintServers',
    'POST',
  ] as const
}

export function usePostAdminDirectoryV1ParentChromePrintServersBatchDeletePrintServers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1)[':parent']['chrome']['printServers:batchDeletePrintServers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAdminDirectoryV1ParentChromePrintServersBatchDeletePrintServersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1)[':parent']['chrome']['printServers:batchDeletePrintServers']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1[':parent'].chrome['printServers:batchDeletePrintServers'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminDirectoryV1ParentChromePrintersKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1)[':parent']['chrome']['printers']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/:parent/chrome/printers', args] as const
}

export function useGetAdminDirectoryV1ParentChromePrinters<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1)[':parent']['chrome']['printers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1ParentChromePrintersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1[':parent'].chrome.printers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1ParentChromePrinters<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1)[':parent']['chrome']['printers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1ParentChromePrintersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1[':parent'].chrome.printers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdminDirectoryV1ParentChromePrintersKey() {
  return ['admin', '/admin/directory/v1/:parent/chrome/printers', 'POST'] as const
}

export function usePostAdminDirectoryV1ParentChromePrinters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.admin.directory.v1)[':parent']['chrome']['printers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminDirectoryV1ParentChromePrintersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1)[':parent']['chrome']['printers']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1[':parent'].chrome.printers.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminDirectoryV1ParentChromePrintersBatchCreatePrintersKey() {
  return [
    'admin',
    '/admin/directory/v1/:parent/chrome/printers:batchCreatePrinters',
    'POST',
  ] as const
}

export function usePostAdminDirectoryV1ParentChromePrintersBatchCreatePrinters<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1)[':parent']['chrome']['printers:batchCreatePrinters']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminDirectoryV1ParentChromePrintersBatchCreatePrintersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1)[':parent']['chrome']['printers:batchCreatePrinters']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1[':parent'].chrome['printers:batchCreatePrinters'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminDirectoryV1ParentChromePrintersBatchDeletePrintersKey() {
  return [
    'admin',
    '/admin/directory/v1/:parent/chrome/printers:batchDeletePrinters',
    'POST',
  ] as const
}

export function usePostAdminDirectoryV1ParentChromePrintersBatchDeletePrinters<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.admin.directory.v1)[':parent']['chrome']['printers:batchDeletePrinters']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminDirectoryV1ParentChromePrintersBatchDeletePrintersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.admin.directory.v1)[':parent']['chrome']['printers:batchDeletePrinters']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.directory.v1[':parent'].chrome['printers:batchDeletePrinters'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminDirectoryV1ParentChromePrintersListPrinterModelsKey(
  args: InferRequestType<
    (typeof client.admin.directory.v1)[':parent']['chrome']['printers:listPrinterModels']['$get']
  >,
) {
  return ['admin', '/admin/directory/v1/:parent/chrome/printers:listPrinterModels', args] as const
}

export function useGetAdminDirectoryV1ParentChromePrintersListPrinterModels<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.directory.v1)[':parent']['chrome']['printers:listPrinterModels']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1ParentChromePrintersListPrinterModelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1[':parent'].chrome['printers:listPrinterModels'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDirectoryV1ParentChromePrintersListPrinterModels<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.admin.directory.v1)[':parent']['chrome']['printers:listPrinterModels']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminDirectoryV1ParentChromePrintersListPrinterModelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.directory.v1[':parent'].chrome['printers:listPrinterModels'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdminDirectoryV1ChannelsStopKey() {
  return ['admin', '/admin/directory_v1/channels/stop', 'POST'] as const
}

export function usePostAdminDirectoryV1ChannelsStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.directory_v1.channels.stop.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.directory_v1.channels.stop.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminDirectoryV1ChannelsStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.directory_v1.channels.stop.$post> },
      ) => parseResponse(client.admin.directory_v1.channels.stop.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
