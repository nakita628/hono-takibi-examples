import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getIndexPhpKey() {
  return ['index.php'] as const
}

export function getOcsKey() {
  return ['ocs'] as const
}

export function getGetIndexPhpAppsFilesApiV1ThumbnailXYFileKey(
  args: InferRequestType<
    (typeof client)['index.php']['apps']['files']['api']['v1']['thumbnail'][':x'][':y'][':file']['$get']
  >,
) {
  return ['index.php', '/index.php/apps/files/api/v1/thumbnail/:x/:y/:file', args] as const
}

export function useGetIndexPhpAppsFilesApiV1ThumbnailXYFile<TError = unknown>(
  args: InferRequestType<
    (typeof client)['index.php']['apps']['files']['api']['v1']['thumbnail'][':x'][':y'][':file']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['index.php']['apps']['files']['api']['v1']['thumbnail'][':x'][':y'][':file']['$get']
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
        ? getGetIndexPhpAppsFilesApiV1ThumbnailXYFileKey(args)
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
                (typeof client)['index.php']['apps']['files']['api']['v1']['thumbnail'][':x'][':y'][':file']['$get']
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
          client['index.php'].apps.files.api.v1.thumbnail[':x'][':y'][':file'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexPhpAppsFilesApiV1ThumbnailXYFile<TError = unknown>(
  args: InferRequestType<
    (typeof client)['index.php']['apps']['files']['api']['v1']['thumbnail'][':x'][':y'][':file']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['index.php']['apps']['files']['api']['v1']['thumbnail'][':x'][':y'][':file']['$get']
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
        ? getGetIndexPhpAppsFilesApiV1ThumbnailXYFileKey(args)
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
                (typeof client)['index.php']['apps']['files']['api']['v1']['thumbnail'][':x'][':y'][':file']['$get']
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
          client['index.php'].apps.files.api.v1.thumbnail[':x'][':y'][':file'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsFilesApiV1DirectEditingKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['directEditing']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/files/api/v1/directEditing', keyArgs] as const
}

export function useGetOcsV2PhpAppsFilesApiV1DirectEditing<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['directEditing']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['directEditing']['$get']
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
        ? getGetOcsV2PhpAppsFilesApiV1DirectEditingKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['directEditing']['$get']
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
          client.ocs['v2.php'].apps.files.api.v1.directEditing.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsFilesApiV1DirectEditing<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['directEditing']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['directEditing']['$get']
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
        ? getGetOcsV2PhpAppsFilesApiV1DirectEditingKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['directEditing']['$get']
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
          client.ocs['v2.php'].apps.files.api.v1.directEditing.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsFilesApiV1DirectEditingTemplatesEditorIdCreatorIdKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['directEditing']['templates'][':editorId'][':creatorId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'ocs',
    '/ocs/v2.php/apps/files/api/v1/directEditing/templates/:editorId/:creatorId',
    keyArgs,
  ] as const
}

export function useGetOcsV2PhpAppsFilesApiV1DirectEditingTemplatesEditorIdCreatorId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['directEditing']['templates'][':editorId'][':creatorId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['directEditing']['templates'][':editorId'][':creatorId']['$get']
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
        ? getGetOcsV2PhpAppsFilesApiV1DirectEditingTemplatesEditorIdCreatorIdKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['directEditing']['templates'][':editorId'][':creatorId']['$get']
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
          client.ocs['v2.php'].apps.files.api.v1.directEditing.templates[':editorId'][
            ':creatorId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsFilesApiV1DirectEditingTemplatesEditorIdCreatorId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['directEditing']['templates'][':editorId'][':creatorId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['directEditing']['templates'][':editorId'][':creatorId']['$get']
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
        ? getGetOcsV2PhpAppsFilesApiV1DirectEditingTemplatesEditorIdCreatorIdKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['directEditing']['templates'][':editorId'][':creatorId']['$get']
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
          client.ocs['v2.php'].apps.files.api.v1.directEditing.templates[':editorId'][
            ':creatorId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsFilesApiV1DirectEditingOpenKey() {
  return ['ocs', '/ocs/v2.php/apps/files/api/v1/directEditing/open', 'POST'] as const
}

export function usePostOcsV2PhpAppsFilesApiV1DirectEditingOpen<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['directEditing']['open']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['directEditing']['open']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsFilesApiV1DirectEditingOpenKey()
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
            (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['directEditing']['open']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.files.api.v1.directEditing.open.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsFilesApiV1DirectEditingCreateKey() {
  return ['ocs', '/ocs/v2.php/apps/files/api/v1/directEditing/create', 'POST'] as const
}

export function usePostOcsV2PhpAppsFilesApiV1DirectEditingCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['directEditing']['create']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['directEditing']['create']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsFilesApiV1DirectEditingCreateKey()
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
            (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['directEditing']['create']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.files.api.v1.directEditing.create.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsFilesApiV1TemplatesKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['templates']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/files/api/v1/templates', keyArgs] as const
}

export function useGetOcsV2PhpAppsFilesApiV1Templates<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['templates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['templates']['$get']
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
        ? getGetOcsV2PhpAppsFilesApiV1TemplatesKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['templates']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ocs['v2.php'].apps.files.api.v1.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsFilesApiV1Templates<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['templates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['templates']['$get']
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
        ? getGetOcsV2PhpAppsFilesApiV1TemplatesKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['templates']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ocs['v2.php'].apps.files.api.v1.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsFilesApiV1TemplatesFieldsFileIdKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['templates']['fields'][':fileId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/files/api/v1/templates/fields/:fileId', keyArgs] as const
}

export function useGetOcsV2PhpAppsFilesApiV1TemplatesFieldsFileId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['templates']['fields'][':fileId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['templates']['fields'][':fileId']['$get']
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
        ? getGetOcsV2PhpAppsFilesApiV1TemplatesFieldsFileIdKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['templates']['fields'][':fileId']['$get']
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
          client.ocs['v2.php'].apps.files.api.v1.templates.fields[':fileId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsFilesApiV1TemplatesFieldsFileId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['templates']['fields'][':fileId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['templates']['fields'][':fileId']['$get']
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
        ? getGetOcsV2PhpAppsFilesApiV1TemplatesFieldsFileIdKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['templates']['fields'][':fileId']['$get']
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
          client.ocs['v2.php'].apps.files.api.v1.templates.fields[':fileId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsFilesApiV1TemplatesCreateKey() {
  return ['ocs', '/ocs/v2.php/apps/files/api/v1/templates/create', 'POST'] as const
}

export function usePostOcsV2PhpAppsFilesApiV1TemplatesCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['templates']['create']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['templates']['create']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsFilesApiV1TemplatesCreateKey()
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
            (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['templates']['create']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.files.api.v1.templates.create.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsFilesApiV1TemplatesPathKey() {
  return ['ocs', '/ocs/v2.php/apps/files/api/v1/templates/path', 'POST'] as const
}

export function usePostOcsV2PhpAppsFilesApiV1TemplatesPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['templates']['path']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['templates']['path']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsFilesApiV1TemplatesPathKey()
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
            (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['templates']['path']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.files.api.v1.templates.path.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsFilesApiV1TransferownershipKey() {
  return ['ocs', '/ocs/v2.php/apps/files/api/v1/transferownership', 'POST'] as const
}

export function usePostOcsV2PhpAppsFilesApiV1Transferownership<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['transferownership']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['transferownership']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsFilesApiV1TransferownershipKey()
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
            (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['transferownership']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.files.api.v1.transferownership.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsFilesApiV1TransferownershipIdKey() {
  return ['ocs', '/ocs/v2.php/apps/files/api/v1/transferownership/:id', 'POST'] as const
}

export function usePostOcsV2PhpAppsFilesApiV1TransferownershipId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['transferownership'][':id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['transferownership'][':id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsFilesApiV1TransferownershipIdKey()
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
            (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['transferownership'][':id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.files.api.v1.transferownership[':id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsFilesApiV1TransferownershipIdKey() {
  return ['ocs', '/ocs/v2.php/apps/files/api/v1/transferownership/:id', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsFilesApiV1TransferownershipId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['transferownership'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['transferownership'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsFilesApiV1TransferownershipIdKey()
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
            (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['transferownership'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.files.api.v1.transferownership[':id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsFilesApiV1OpenlocaleditorKey() {
  return ['ocs', '/ocs/v2.php/apps/files/api/v1/openlocaleditor', 'POST'] as const
}

export function usePostOcsV2PhpAppsFilesApiV1Openlocaleditor<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['openlocaleditor']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['openlocaleditor']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsFilesApiV1OpenlocaleditorKey()
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
            (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['openlocaleditor']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.files.api.v1.openlocaleditor.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsFilesApiV1OpenlocaleditorTokenKey() {
  return ['ocs', '/ocs/v2.php/apps/files/api/v1/openlocaleditor/:token', 'POST'] as const
}

export function usePostOcsV2PhpAppsFilesApiV1OpenlocaleditorToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['openlocaleditor'][':token']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['openlocaleditor'][':token']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsFilesApiV1OpenlocaleditorTokenKey()
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
            (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['openlocaleditor'][':token']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.files.api.v1.openlocaleditor[':token'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsFilesApiV1FolderTreeKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['folder-tree']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/files/api/v1/folder-tree', keyArgs] as const
}

export function useGetOcsV2PhpAppsFilesApiV1FolderTree<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['folder-tree']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['folder-tree']['$get']
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
        ? getGetOcsV2PhpAppsFilesApiV1FolderTreeKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['folder-tree']['$get']
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
          client.ocs['v2.php'].apps.files.api.v1['folder-tree'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsFilesApiV1FolderTree<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['folder-tree']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['folder-tree']['$get']
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
        ? getGetOcsV2PhpAppsFilesApiV1FolderTreeKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['folder-tree']['$get']
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
          client.ocs['v2.php'].apps.files.api.v1['folder-tree'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsFilesApiV1ConvertKey() {
  return ['ocs', '/ocs/v2.php/apps/files/api/v1/convert', 'POST'] as const
}

export function usePostOcsV2PhpAppsFilesApiV1Convert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['convert']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['convert']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsFilesApiV1ConvertKey()
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
            (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['convert']['$post']
          >
        },
      ) => parseResponse(client.ocs['v2.php'].apps.files.api.v1.convert.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsFilesApiV1OpenedKey() {
  return ['ocs', '/ocs/v2.php/apps/files/api/v1/opened', 'POST'] as const
}

export function usePostOcsV2PhpAppsFilesApiV1Opened<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['opened']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['opened']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsFilesApiV1OpenedKey()
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
            (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['opened']['$post']
          >
        },
      ) => parseResponse(client.ocs['v2.php'].apps.files.api.v1.opened.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
