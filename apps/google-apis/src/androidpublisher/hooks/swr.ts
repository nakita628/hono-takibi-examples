import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAndroidpublisherKey() {
  return ['androidpublisher'] as const
}

export function getPostAndroidpublisherV3ApplicationsInternalappsharingPackageNameArtifactsApkKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/internalappsharing/:packageName/artifacts/apk',
    'POST',
  ] as const
}

export function usePostAndroidpublisherV3ApplicationsInternalappsharingPackageNameArtifactsApk<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications.internalappsharing)[':packageName']['artifacts']['apk']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications.internalappsharing)[':packageName']['artifacts']['apk']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAndroidpublisherV3ApplicationsInternalappsharingPackageNameArtifactsApkKey()
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
            (typeof client.androidpublisher.v3.applications.internalappsharing)[':packageName']['artifacts']['apk']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications.internalappsharing[
            ':packageName'
          ].artifacts.apk.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAndroidpublisherV3ApplicationsInternalappsharingPackageNameArtifactsBundleKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/internalappsharing/:packageName/artifacts/bundle',
    'POST',
  ] as const
}

export function usePostAndroidpublisherV3ApplicationsInternalappsharingPackageNameArtifactsBundle<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications.internalappsharing)[':packageName']['artifacts']['bundle']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications.internalappsharing)[':packageName']['artifacts']['bundle']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostAndroidpublisherV3ApplicationsInternalappsharingPackageNameArtifactsBundleKey()
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
            (typeof client.androidpublisher.v3.applications.internalappsharing)[':packageName']['artifacts']['bundle']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications.internalappsharing[
            ':packageName'
          ].artifacts.bundle.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsKey(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['deviceTierConfigs']['$get']
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/deviceTierConfigs',
    args,
  ] as const
}

export function useGetAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigs<TError = unknown>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['deviceTierConfigs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['deviceTierConfigs']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsKey(args)
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['deviceTierConfigs']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].deviceTierConfigs.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigs<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['deviceTierConfigs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['deviceTierConfigs']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsKey(args)
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['deviceTierConfigs']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].deviceTierConfigs.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/deviceTierConfigs',
    'POST',
  ] as const
}

export function usePostAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['deviceTierConfigs']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['deviceTierConfigs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['deviceTierConfigs']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].deviceTierConfigs.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsDeviceTierConfigIdKey(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['deviceTierConfigs'][':deviceTierConfigId']['$get']
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/deviceTierConfigs/:deviceTierConfigId',
    args,
  ] as const
}

export function useGetAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsDeviceTierConfigId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['deviceTierConfigs'][':deviceTierConfigId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['deviceTierConfigs'][':deviceTierConfigId']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsDeviceTierConfigIdKey(
            args,
          )
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['deviceTierConfigs'][':deviceTierConfigId']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].deviceTierConfigs[
            ':deviceTierConfigId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsDeviceTierConfigId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['deviceTierConfigs'][':deviceTierConfigId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['deviceTierConfigs'][':deviceTierConfigId']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsDeviceTierConfigIdKey(
            args,
          )
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['deviceTierConfigs'][':deviceTierConfigId']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].deviceTierConfigs[
            ':deviceTierConfigId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAndroidpublisherV3ApplicationsPackageNameEditsKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits',
    'POST',
  ] as const
}

export function usePostAndroidpublisherV3ApplicationsPackageNameEdits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAndroidpublisherV3ApplicationsPackageNameEditsKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].edits.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdKey(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['$get']
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId',
    args,
  ] as const
}

export function useGetAndroidpublisherV3ApplicationsPackageNameEditsEditId<TError = unknown>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdKey(args)
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidpublisherV3ApplicationsPackageNameEditsEditId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdKey(args)
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId',
    'DELETE',
  ] as const
}

export function useDeleteAndroidpublisherV3ApplicationsPackageNameEditsEditId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksKey(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks']['$get']
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/apks',
    args,
  ] as const
}

export function useGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdApks<TError = unknown>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksKey(args)
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].apks.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdApks<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksKey(args)
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].apks.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/apks',
    'POST',
  ] as const
}

export function usePostAndroidpublisherV3ApplicationsPackageNameEditsEditIdApks<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].apks.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksExternallyHostedKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/apks/externallyHosted',
    'POST',
  ] as const
}

export function usePostAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksExternallyHosted<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks']['externallyHosted']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks']['externallyHosted']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksExternallyHostedKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks']['externallyHosted']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].edits[
            ':editId'
          ].apks.externallyHosted.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeDeobfuscationFilesDeobfuscationFileTypeKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/apks/:apkVersionCode/deobfuscationFiles/:deobfuscationFileType',
    'POST',
  ] as const
}

export function usePostAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeDeobfuscationFilesDeobfuscationFileType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['deobfuscationFiles'][':deobfuscationFileType']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['deobfuscationFiles'][':deobfuscationFileType']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeDeobfuscationFilesDeobfuscationFileTypeKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['deobfuscationFiles'][':deobfuscationFileType']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].apks[
            ':apkVersionCode'
          ].deobfuscationFiles[':deobfuscationFileType'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeKey(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['expansionFiles'][':expansionFileType']['$get']
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/apks/:apkVersionCode/expansionFiles/:expansionFileType',
    args,
  ] as const
}

export function useGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['expansionFiles'][':expansionFileType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['expansionFiles'][':expansionFileType']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeKey(
            args,
          )
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['expansionFiles'][':expansionFileType']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].apks[
            ':apkVersionCode'
          ].expansionFiles[':expansionFileType'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['expansionFiles'][':expansionFileType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['expansionFiles'][':expansionFileType']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeKey(
            args,
          )
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['expansionFiles'][':expansionFileType']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].apks[
            ':apkVersionCode'
          ].expansionFiles[':expansionFileType'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/apks/:apkVersionCode/expansionFiles/:expansionFileType',
    'PUT',
  ] as const
}

export function usePutAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['expansionFiles'][':expansionFileType']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['expansionFiles'][':expansionFileType']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['expansionFiles'][':expansionFileType']['$put']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].apks[
            ':apkVersionCode'
          ].expansionFiles[':expansionFileType'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/apks/:apkVersionCode/expansionFiles/:expansionFileType',
    'POST',
  ] as const
}

export function usePostAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['expansionFiles'][':expansionFileType']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['expansionFiles'][':expansionFileType']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['expansionFiles'][':expansionFileType']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].apks[
            ':apkVersionCode'
          ].expansionFiles[':expansionFileType'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/apks/:apkVersionCode/expansionFiles/:expansionFileType',
    'PATCH',
  ] as const
}

export function usePatchAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['expansionFiles'][':expansionFileType']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['expansionFiles'][':expansionFileType']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['expansionFiles'][':expansionFileType']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].apks[
            ':apkVersionCode'
          ].expansionFiles[':expansionFileType'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdBundlesKey(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['bundles']['$get']
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/bundles',
    args,
  ] as const
}

export function useGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdBundles<TError = unknown>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['bundles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['bundles']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdBundlesKey(args)
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['bundles']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].bundles.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdBundles<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['bundles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['bundles']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdBundlesKey(args)
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['bundles']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].bundles.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdBundlesKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/bundles',
    'POST',
  ] as const
}

export function usePostAndroidpublisherV3ApplicationsPackageNameEditsEditIdBundles<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['bundles']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['bundles']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdBundlesKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['bundles']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].bundles.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdCountryAvailabilityTrackKey(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['countryAvailability'][':track']['$get']
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/countryAvailability/:track',
    args,
  ] as const
}

export function useGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdCountryAvailabilityTrack<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['countryAvailability'][':track']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['countryAvailability'][':track']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdCountryAvailabilityTrackKey(
            args,
          )
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['countryAvailability'][':track']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].edits[
            ':editId'
          ].countryAvailability[':track'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdCountryAvailabilityTrack<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['countryAvailability'][':track']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['countryAvailability'][':track']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdCountryAvailabilityTrackKey(
            args,
          )
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['countryAvailability'][':track']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].edits[
            ':editId'
          ].countryAvailability[':track'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetailsKey(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['details']['$get']
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/details',
    args,
  ] as const
}

export function useGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetails<TError = unknown>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['details']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['details']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetailsKey(args)
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['details']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].details.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetails<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['details']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['details']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetailsKey(args)
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['details']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].details.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetailsKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/details',
    'PUT',
  ] as const
}

export function usePutAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetails<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['details']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['details']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetailsKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['details']['$put']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].details.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetailsKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/details',
    'PATCH',
  ] as const
}

export function usePatchAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetails<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['details']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['details']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetailsKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['details']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].details.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsKey(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings']['$get']
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/listings',
    args,
  ] as const
}

export function useGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdListings<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsKey(args)
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].listings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdListings<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsKey(args)
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].listings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/listings',
    'DELETE',
  ] as const
}

export function useDeleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].listings.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageKey(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language']['$get']
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/listings/:language',
    args,
  ] as const
}

export function useGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguage<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageKey(args)
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].listings[
            ':language'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguage<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageKey(args)
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].listings[
            ':language'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/listings/:language',
    'PUT',
  ] as const
}

export function usePutAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguage<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language']['$put']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].listings[
            ':language'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/listings/:language',
    'DELETE',
  ] as const
}

export function useDeleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguage<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].listings[
            ':language'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/listings/:language',
    'PATCH',
  ] as const
}

export function usePatchAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguage<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].listings[
            ':language'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeKey(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language'][':imageType']['$get']
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/listings/:language/:imageType',
    args,
  ] as const
}

export function useGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language'][':imageType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language'][':imageType']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeKey(
            args,
          )
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language'][':imageType']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].listings[
            ':language'
          ][':imageType'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language'][':imageType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language'][':imageType']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeKey(
            args,
          )
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language'][':imageType']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].listings[
            ':language'
          ][':imageType'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/listings/:language/:imageType',
    'POST',
  ] as const
}

export function usePostAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language'][':imageType']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language'][':imageType']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language'][':imageType']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].listings[
            ':language'
          ][':imageType'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/listings/:language/:imageType',
    'DELETE',
  ] as const
}

export function useDeleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language'][':imageType']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language'][':imageType']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language'][':imageType']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].listings[
            ':language'
          ][':imageType'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeImageIdKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/listings/:language/:imageType/:imageId',
    'DELETE',
  ] as const
}

export function useDeleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeImageId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language'][':imageType'][':imageId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language'][':imageType'][':imageId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeImageIdKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language'][':imageType'][':imageId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].listings[
            ':language'
          ][':imageType'][':imageId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrackKey(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['testers'][':track']['$get']
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/testers/:track',
    args,
  ] as const
}

export function useGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrack<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['testers'][':track']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['testers'][':track']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrackKey(args)
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['testers'][':track']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].testers[
            ':track'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrack<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['testers'][':track']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['testers'][':track']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrackKey(args)
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['testers'][':track']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].testers[
            ':track'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrackKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/testers/:track',
    'PUT',
  ] as const
}

export function usePutAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrack<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['testers'][':track']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['testers'][':track']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrackKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['testers'][':track']['$put']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].testers[
            ':track'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrackKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/testers/:track',
    'PATCH',
  ] as const
}

export function usePatchAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrack<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['testers'][':track']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['testers'][':track']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrackKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['testers'][':track']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].testers[
            ':track'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksKey(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks']['$get']
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/tracks',
    args,
  ] as const
}

export function useGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracks<TError = unknown>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksKey(args)
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].tracks.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracks<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksKey(args)
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].tracks.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrackKey(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks'][':track']['$get']
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/tracks/:track',
    args,
  ] as const
}

export function useGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrack<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks'][':track']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks'][':track']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrackKey(args)
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks'][':track']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].tracks[
            ':track'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrack<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks'][':track']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks'][':track']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrackKey(args)
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks'][':track']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].tracks[
            ':track'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrackKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/tracks/:track',
    'PUT',
  ] as const
}

export function usePutAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrack<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks'][':track']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks'][':track']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrackKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks'][':track']['$put']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].tracks[
            ':track'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrackKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/tracks/:track',
    'PATCH',
  ] as const
}

export function usePatchAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrack<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks'][':track']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks'][':track']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrackKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks'][':track']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].tracks[
            ':track'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdCommitKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId:commit',
    'POST',
  ] as const
}

export function usePostAndroidpublisherV3ApplicationsPackageNameEditsEditIdCommit<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId:commit']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId:commit']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdCommitKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId:commit']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].edits[':editId:commit'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdValidateKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId:validate',
    'POST',
  ] as const
}

export function usePostAndroidpublisherV3ApplicationsPackageNameEditsEditIdValidate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId:validate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId:validate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdValidateKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId:validate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].edits[':editId:validate'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidpublisherV3ApplicationsPackageNameGeneratedApksVersionCodeKey(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['generatedApks'][':versionCode']['$get']
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/generatedApks/:versionCode',
    args,
  ] as const
}

export function useGetAndroidpublisherV3ApplicationsPackageNameGeneratedApksVersionCode<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['generatedApks'][':versionCode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['generatedApks'][':versionCode']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameGeneratedApksVersionCodeKey(args)
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['generatedApks'][':versionCode']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].generatedApks[
            ':versionCode'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidpublisherV3ApplicationsPackageNameGeneratedApksVersionCode<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['generatedApks'][':versionCode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['generatedApks'][':versionCode']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameGeneratedApksVersionCodeKey(args)
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['generatedApks'][':versionCode']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].generatedApks[
            ':versionCode'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAndroidpublisherV3ApplicationsPackageNameGeneratedApksVersionCodeDownloadsDownloadIdDownloadKey(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['generatedApks'][':versionCode']['downloads'][':downloadId:download']['$get']
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/generatedApks/:versionCode/downloads/:downloadId:download',
    args,
  ] as const
}

export function useGetAndroidpublisherV3ApplicationsPackageNameGeneratedApksVersionCodeDownloadsDownloadIdDownload<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['generatedApks'][':versionCode']['downloads'][':downloadId:download']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['generatedApks'][':versionCode']['downloads'][':downloadId:download']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameGeneratedApksVersionCodeDownloadsDownloadIdDownloadKey(
            args,
          )
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['generatedApks'][':versionCode']['downloads'][':downloadId:download']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].generatedApks[
            ':versionCode'
          ].downloads[':downloadId:download'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidpublisherV3ApplicationsPackageNameGeneratedApksVersionCodeDownloadsDownloadIdDownload<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['generatedApks'][':versionCode']['downloads'][':downloadId:download']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['generatedApks'][':versionCode']['downloads'][':downloadId:download']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameGeneratedApksVersionCodeDownloadsDownloadIdDownloadKey(
            args,
          )
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['generatedApks'][':versionCode']['downloads'][':downloadId:download']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].generatedApks[
            ':versionCode'
          ].downloads[':downloadId:download'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAndroidpublisherV3ApplicationsPackageNameInappproductsKey(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts']['$get']
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/inappproducts',
    args,
  ] as const
}

export function useGetAndroidpublisherV3ApplicationsPackageNameInappproducts<TError = unknown>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameInappproductsKey(args)
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].inappproducts.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidpublisherV3ApplicationsPackageNameInappproducts<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameInappproductsKey(args)
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].inappproducts.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAndroidpublisherV3ApplicationsPackageNameInappproductsKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/inappproducts',
    'POST',
  ] as const
}

export function usePostAndroidpublisherV3ApplicationsPackageNameInappproducts<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAndroidpublisherV3ApplicationsPackageNameInappproductsKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].inappproducts.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidpublisherV3ApplicationsPackageNameInappproductsSkuKey(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts'][':sku']['$get']
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/inappproducts/:sku',
    args,
  ] as const
}

export function useGetAndroidpublisherV3ApplicationsPackageNameInappproductsSku<TError = unknown>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts'][':sku']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts'][':sku']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameInappproductsSkuKey(args)
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts'][':sku']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].inappproducts[':sku'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidpublisherV3ApplicationsPackageNameInappproductsSku<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts'][':sku']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts'][':sku']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameInappproductsSkuKey(args)
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts'][':sku']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].inappproducts[':sku'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAndroidpublisherV3ApplicationsPackageNameInappproductsSkuKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/inappproducts/:sku',
    'PUT',
  ] as const
}

export function usePutAndroidpublisherV3ApplicationsPackageNameInappproductsSku<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts'][':sku']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts'][':sku']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAndroidpublisherV3ApplicationsPackageNameInappproductsSkuKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts'][':sku']['$put']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].inappproducts[':sku'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAndroidpublisherV3ApplicationsPackageNameInappproductsSkuKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/inappproducts/:sku',
    'DELETE',
  ] as const
}

export function useDeleteAndroidpublisherV3ApplicationsPackageNameInappproductsSku<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts'][':sku']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts'][':sku']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteAndroidpublisherV3ApplicationsPackageNameInappproductsSkuKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts'][':sku']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].inappproducts[':sku'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchAndroidpublisherV3ApplicationsPackageNameInappproductsSkuKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/inappproducts/:sku',
    'PATCH',
  ] as const
}

export function usePatchAndroidpublisherV3ApplicationsPackageNameInappproductsSku<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts'][':sku']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts'][':sku']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAndroidpublisherV3ApplicationsPackageNameInappproductsSkuKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts'][':sku']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].inappproducts[':sku'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAndroidpublisherV3ApplicationsPackageNameOrdersOrderIdRefundKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/orders/:orderId:refund',
    'POST',
  ] as const
}

export function usePostAndroidpublisherV3ApplicationsPackageNameOrdersOrderIdRefund<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['orders'][':orderId:refund']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['orders'][':orderId:refund']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAndroidpublisherV3ApplicationsPackageNameOrdersOrderIdRefundKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['orders'][':orderId:refund']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].orders[':orderId:refund'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAndroidpublisherV3ApplicationsPackageNamePricingConvertRegionPricesKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/pricing:convertRegionPrices',
    'POST',
  ] as const
}

export function usePostAndroidpublisherV3ApplicationsPackageNamePricingConvertRegionPrices<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['pricing:convertRegionPrices']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['pricing:convertRegionPrices']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAndroidpublisherV3ApplicationsPackageNamePricingConvertRegionPricesKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['pricing:convertRegionPrices']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'][
            'pricing:convertRegionPrices'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenKey(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['products'][':productId']['tokens'][':token']['$get']
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/purchases/products/:productId/tokens/:token',
    args,
  ] as const
}

export function useGetAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensToken<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['products'][':productId']['tokens'][':token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['products'][':productId']['tokens'][':token']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenKey(
            args,
          )
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['products'][':productId']['tokens'][':token']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].purchases.products[
            ':productId'
          ].tokens[':token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensToken<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['products'][':productId']['tokens'][':token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['products'][':productId']['tokens'][':token']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenKey(
            args,
          )
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['products'][':productId']['tokens'][':token']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].purchases.products[
            ':productId'
          ].tokens[':token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenAcknowledgeKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/purchases/products/:productId/tokens/:token:acknowledge',
    'POST',
  ] as const
}

export function usePostAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenAcknowledge<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['products'][':productId']['tokens'][':token:acknowledge']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['products'][':productId']['tokens'][':token:acknowledge']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenAcknowledgeKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['products'][':productId']['tokens'][':token:acknowledge']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].purchases.products[
            ':productId'
          ].tokens[':token:acknowledge'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenConsumeKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/purchases/products/:productId/tokens/:token:consume',
    'POST',
  ] as const
}

export function usePostAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenConsume<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['products'][':productId']['tokens'][':token:consume']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['products'][':productId']['tokens'][':token:consume']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenConsumeKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['products'][':productId']['tokens'][':token:consume']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].purchases.products[
            ':productId'
          ].tokens[':token:consume'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenKey(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token']['$get']
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/purchases/subscriptions/:subscriptionId/tokens/:token',
    args,
  ] as const
}

export function useGetAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensToken<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenKey(
            args,
          )
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].purchases.subscriptions[
            ':subscriptionId'
          ].tokens[':token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensToken<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenKey(
            args,
          )
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].purchases.subscriptions[
            ':subscriptionId'
          ].tokens[':token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenAcknowledgeKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/purchases/subscriptions/:subscriptionId/tokens/:token:acknowledge',
    'POST',
  ] as const
}

export function usePostAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenAcknowledge<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:acknowledge']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:acknowledge']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenAcknowledgeKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:acknowledge']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].purchases.subscriptions[
            ':subscriptionId'
          ].tokens[':token:acknowledge'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenCancelKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/purchases/subscriptions/:subscriptionId/tokens/:token:cancel',
    'POST',
  ] as const
}

export function usePostAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenCancel<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:cancel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenCancelKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].purchases.subscriptions[
            ':subscriptionId'
          ].tokens[':token:cancel'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenDeferKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/purchases/subscriptions/:subscriptionId/tokens/:token:defer',
    'POST',
  ] as const
}

export function usePostAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenDefer<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:defer']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:defer']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenDeferKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:defer']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].purchases.subscriptions[
            ':subscriptionId'
          ].tokens[':token:defer'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenRefundKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/purchases/subscriptions/:subscriptionId/tokens/:token:refund',
    'POST',
  ] as const
}

export function usePostAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenRefund<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:refund']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:refund']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenRefundKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:refund']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].purchases.subscriptions[
            ':subscriptionId'
          ].tokens[':token:refund'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenRevokeKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/purchases/subscriptions/:subscriptionId/tokens/:token:revoke',
    'POST',
  ] as const
}

export function usePostAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenRevoke<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:revoke']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:revoke']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenRevokeKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:revoke']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].purchases.subscriptions[
            ':subscriptionId'
          ].tokens[':token:revoke'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsv2TokensTokenKey(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptionsv2']['tokens'][':token']['$get']
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/purchases/subscriptionsv2/tokens/:token',
    args,
  ] as const
}

export function useGetAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsv2TokensToken<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptionsv2']['tokens'][':token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptionsv2']['tokens'][':token']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsv2TokensTokenKey(
            args,
          )
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptionsv2']['tokens'][':token']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].purchases.subscriptionsv2.tokens[
            ':token'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsv2TokensToken<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptionsv2']['tokens'][':token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptionsv2']['tokens'][':token']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsv2TokensTokenKey(
            args,
          )
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptionsv2']['tokens'][':token']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].purchases.subscriptionsv2.tokens[
            ':token'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAndroidpublisherV3ApplicationsPackageNamePurchasesVoidedpurchasesKey(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['voidedpurchases']['$get']
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/purchases/voidedpurchases',
    args,
  ] as const
}

export function useGetAndroidpublisherV3ApplicationsPackageNamePurchasesVoidedpurchases<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['voidedpurchases']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['voidedpurchases']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNamePurchasesVoidedpurchasesKey(args)
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['voidedpurchases']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].purchases.voidedpurchases.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidpublisherV3ApplicationsPackageNamePurchasesVoidedpurchases<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['voidedpurchases']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['voidedpurchases']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNamePurchasesVoidedpurchasesKey(args)
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['voidedpurchases']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].purchases.voidedpurchases.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAndroidpublisherV3ApplicationsPackageNameReviewsKey(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['reviews']['$get']
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/reviews',
    args,
  ] as const
}

export function useGetAndroidpublisherV3ApplicationsPackageNameReviews<TError = unknown>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['reviews']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['reviews']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameReviewsKey(args)
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['reviews']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].reviews.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidpublisherV3ApplicationsPackageNameReviews<TError = unknown>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['reviews']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['reviews']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameReviewsKey(args)
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['reviews']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].reviews.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAndroidpublisherV3ApplicationsPackageNameReviewsReviewIdKey(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['reviews'][':reviewId']['$get']
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/reviews/:reviewId',
    args,
  ] as const
}

export function useGetAndroidpublisherV3ApplicationsPackageNameReviewsReviewId<TError = unknown>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['reviews'][':reviewId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['reviews'][':reviewId']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameReviewsReviewIdKey(args)
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['reviews'][':reviewId']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].reviews[':reviewId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidpublisherV3ApplicationsPackageNameReviewsReviewId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['reviews'][':reviewId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['reviews'][':reviewId']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameReviewsReviewIdKey(args)
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['reviews'][':reviewId']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].reviews[':reviewId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAndroidpublisherV3ApplicationsPackageNameReviewsReviewIdReplyKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/reviews/:reviewId:reply',
    'POST',
  ] as const
}

export function usePostAndroidpublisherV3ApplicationsPackageNameReviewsReviewIdReply<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['reviews'][':reviewId:reply']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['reviews'][':reviewId:reply']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAndroidpublisherV3ApplicationsPackageNameReviewsReviewIdReplyKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['reviews'][':reviewId:reply']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].reviews[':reviewId:reply'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidpublisherV3ApplicationsPackageNameSubscriptionsKey(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions']['$get']
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/subscriptions',
    args,
  ] as const
}

export function useGetAndroidpublisherV3ApplicationsPackageNameSubscriptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameSubscriptionsKey(args)
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].subscriptions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidpublisherV3ApplicationsPackageNameSubscriptions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameSubscriptionsKey(args)
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].subscriptions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/subscriptions',
    'POST',
  ] as const
}

export function usePostAndroidpublisherV3ApplicationsPackageNameSubscriptions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].subscriptions.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdKey(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['$get']
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/subscriptions/:productId',
    args,
  ] as const
}

export function useGetAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdKey(args)
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].subscriptions[':productId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdKey(args)
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].subscriptions[':productId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/subscriptions/:productId',
    'DELETE',
  ] as const
}

export function useDeleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].subscriptions[
            ':productId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/subscriptions/:productId',
    'PATCH',
  ] as const
}

export function usePatchAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].subscriptions[
            ':productId'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/subscriptions/:productId/basePlans/:basePlanId',
    'DELETE',
  ] as const
}

export function useDeleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].subscriptions[
            ':productId'
          ].basePlans[':basePlanId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersKey(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers']['$get']
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/subscriptions/:productId/basePlans/:basePlanId/offers',
    args,
  ] as const
}

export function useGetAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersKey(
            args,
          )
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].subscriptions[
            ':productId'
          ].basePlans[':basePlanId'].offers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersKey(
            args,
          )
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].subscriptions[
            ':productId'
          ].basePlans[':basePlanId'].offers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/subscriptions/:productId/basePlans/:basePlanId/offers',
    'POST',
  ] as const
}

export function usePostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].subscriptions[
            ':productId'
          ].basePlans[':basePlanId'].offers.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdKey(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId']['$get']
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/subscriptions/:productId/basePlans/:basePlanId/offers/:offerId',
    args,
  ] as const
}

export function useGetAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdKey(
            args,
          )
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].subscriptions[
            ':productId'
          ].basePlans[':basePlanId'].offers[':offerId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdKey(
            args,
          )
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].subscriptions[
            ':productId'
          ].basePlans[':basePlanId'].offers[':offerId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/subscriptions/:productId/basePlans/:basePlanId/offers/:offerId',
    'DELETE',
  ] as const
}

export function useDeleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].subscriptions[
            ':productId'
          ].basePlans[':basePlanId'].offers[':offerId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/subscriptions/:productId/basePlans/:basePlanId/offers/:offerId',
    'PATCH',
  ] as const
}

export function usePatchAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].subscriptions[
            ':productId'
          ].basePlans[':basePlanId'].offers[':offerId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdActivateKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/subscriptions/:productId/basePlans/:basePlanId/offers/:offerId:activate',
    'POST',
  ] as const
}

export function usePostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdActivate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId:activate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId:activate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdActivateKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId:activate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].subscriptions[
            ':productId'
          ].basePlans[':basePlanId'].offers[':offerId:activate'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdDeactivateKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/subscriptions/:productId/basePlans/:basePlanId/offers/:offerId:deactivate',
    'POST',
  ] as const
}

export function usePostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdDeactivate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId:deactivate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId:deactivate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdDeactivateKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId:deactivate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].subscriptions[
            ':productId'
          ].basePlans[':basePlanId'].offers[':offerId:deactivate'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdActivateKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/subscriptions/:productId/basePlans/:basePlanId:activate',
    'POST',
  ] as const
}

export function usePostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdActivate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId:activate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId:activate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdActivateKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId:activate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].subscriptions[
            ':productId'
          ].basePlans[':basePlanId:activate'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdDeactivateKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/subscriptions/:productId/basePlans/:basePlanId:deactivate',
    'POST',
  ] as const
}

export function usePostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdDeactivate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId:deactivate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId:deactivate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdDeactivateKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId:deactivate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].subscriptions[
            ':productId'
          ].basePlans[':basePlanId:deactivate'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdMigratePricesKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/subscriptions/:productId/basePlans/:basePlanId:migratePrices',
    'POST',
  ] as const
}

export function usePostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdMigratePrices<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId:migratePrices']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId:migratePrices']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdMigratePricesKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId:migratePrices']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].subscriptions[
            ':productId'
          ].basePlans[':basePlanId:migratePrices'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdArchiveKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/subscriptions/:productId:archive',
    'POST',
  ] as const
}

export function usePostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdArchive<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId:archive']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId:archive']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdArchiveKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId:archive']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].subscriptions[
            ':productId:archive'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsKey(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants']['$get']
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/systemApks/:versionCode/variants',
    args,
  ] as const
}

export function useGetAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariants<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsKey(args)
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].systemApks[
            ':versionCode'
          ].variants.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariants<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsKey(args)
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].systemApks[
            ':versionCode'
          ].variants.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/systemApks/:versionCode/variants',
    'POST',
  ] as const
}

export function usePostAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariants<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsKey()
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
            (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3.applications[':packageName'].systemApks[
            ':versionCode'
          ].variants.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsVariantIdKey(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants'][':variantId']['$get']
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/systemApks/:versionCode/variants/:variantId',
    args,
  ] as const
}

export function useGetAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsVariantId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants'][':variantId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants'][':variantId']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsVariantIdKey(
            args,
          )
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants'][':variantId']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].systemApks[
            ':versionCode'
          ].variants[':variantId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsVariantId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants'][':variantId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants'][':variantId']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsVariantIdKey(
            args,
          )
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants'][':variantId']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].systemApks[
            ':versionCode'
          ].variants[':variantId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsVariantIdDownloadKey(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants'][':variantId:download']['$get']
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/systemApks/:versionCode/variants/:variantId:download',
    args,
  ] as const
}

export function useGetAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsVariantIdDownload<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants'][':variantId:download']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants'][':variantId:download']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsVariantIdDownloadKey(
            args,
          )
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants'][':variantId:download']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].systemApks[
            ':versionCode'
          ].variants[':variantId:download'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsVariantIdDownload<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants'][':variantId:download']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants'][':variantId:download']['$get']
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
        ? getGetAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsVariantIdDownloadKey(
            args,
          )
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
                (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants'][':variantId:download']['$get']
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
          client.androidpublisher.v3.applications[':packageName'].systemApks[
            ':versionCode'
          ].variants[':variantId:download'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAndroidpublisherV3NameKey(
  args: InferRequestType<(typeof client.androidpublisher.v3)[':name']['$get']>,
) {
  return ['androidpublisher', '/androidpublisher/v3/:name', args] as const
}

export function useGetAndroidpublisherV3Name<TError = unknown>(
  args: InferRequestType<(typeof client.androidpublisher.v3)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.androidpublisher.v3)[':name']['$get']>>
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
        ? getGetAndroidpublisherV3NameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.androidpublisher.v3)[':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.androidpublisher.v3[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidpublisherV3Name<TError = unknown>(
  args: InferRequestType<(typeof client.androidpublisher.v3)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.androidpublisher.v3)[':name']['$get']>>
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
        ? getGetAndroidpublisherV3NameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.androidpublisher.v3)[':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.androidpublisher.v3[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAndroidpublisherV3NameKey() {
  return ['androidpublisher', '/androidpublisher/v3/:name', 'DELETE'] as const
}

export function useDeleteAndroidpublisherV3Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.androidpublisher.v3)[':name']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.androidpublisher.v3)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAndroidpublisherV3NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.androidpublisher.v3)[':name']['$delete']> },
      ) => parseResponse(client.androidpublisher.v3[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAndroidpublisherV3NameKey() {
  return ['androidpublisher', '/androidpublisher/v3/:name', 'PATCH'] as const
}

export function usePatchAndroidpublisherV3Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.androidpublisher.v3)[':name']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.androidpublisher.v3)[':name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAndroidpublisherV3NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.androidpublisher.v3)[':name']['$patch']> },
      ) => parseResponse(client.androidpublisher.v3[':name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAndroidpublisherV3NameRefundKey() {
  return ['androidpublisher', '/androidpublisher/v3/:name:refund', 'POST'] as const
}

export function usePostAndroidpublisherV3NameRefund<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.androidpublisher.v3)[':name:refund']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.androidpublisher.v3)[':name:refund']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAndroidpublisherV3NameRefundKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.androidpublisher.v3)[':name:refund']['$post']> },
      ) => parseResponse(client.androidpublisher.v3[':name:refund'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAndroidpublisherV3ParentExternalTransactionsKey() {
  return ['androidpublisher', '/androidpublisher/v3/:parent/externalTransactions', 'POST'] as const
}

export function usePostAndroidpublisherV3ParentExternalTransactions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3)[':parent']['externalTransactions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.androidpublisher.v3)[':parent']['externalTransactions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAndroidpublisherV3ParentExternalTransactionsKey()
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
            (typeof client.androidpublisher.v3)[':parent']['externalTransactions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.androidpublisher.v3[':parent'].externalTransactions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAndroidpublisherV3ParentGrantsKey() {
  return ['androidpublisher', '/androidpublisher/v3/:parent/grants', 'POST'] as const
}

export function usePostAndroidpublisherV3ParentGrants<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.androidpublisher.v3)[':parent']['grants']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.androidpublisher.v3)[':parent']['grants']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAndroidpublisherV3ParentGrantsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.androidpublisher.v3)[':parent']['grants']['$post']>
        },
      ) => parseResponse(client.androidpublisher.v3[':parent'].grants.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAndroidpublisherV3ParentUsersKey(
  args: InferRequestType<(typeof client.androidpublisher.v3)[':parent']['users']['$get']>,
) {
  return ['androidpublisher', '/androidpublisher/v3/:parent/users', args] as const
}

export function useGetAndroidpublisherV3ParentUsers<TError = unknown>(
  args: InferRequestType<(typeof client.androidpublisher.v3)[':parent']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.androidpublisher.v3)[':parent']['users']['$get']>>
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
        ? getGetAndroidpublisherV3ParentUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.androidpublisher.v3)[':parent']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.androidpublisher.v3[':parent'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAndroidpublisherV3ParentUsers<TError = unknown>(
  args: InferRequestType<(typeof client.androidpublisher.v3)[':parent']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.androidpublisher.v3)[':parent']['users']['$get']>>
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
        ? getGetAndroidpublisherV3ParentUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.androidpublisher.v3)[':parent']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.androidpublisher.v3[':parent'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAndroidpublisherV3ParentUsersKey() {
  return ['androidpublisher', '/androidpublisher/v3/:parent/users', 'POST'] as const
}

export function usePostAndroidpublisherV3ParentUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.androidpublisher.v3)[':parent']['users']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.androidpublisher.v3)[':parent']['users']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAndroidpublisherV3ParentUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.androidpublisher.v3)[':parent']['users']['$post']>
        },
      ) => parseResponse(client.androidpublisher.v3[':parent'].users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
