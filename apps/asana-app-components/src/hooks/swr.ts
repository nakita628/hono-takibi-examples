import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getActionMetadataUrlPathPlaceholderKey() {
  return ['action.metadata_url_path_placeholder'] as const
}

export function getActionOnChangeCallbackPathPlaceholderKey() {
  return ['action.on_change_callback_path_placeholder'] as const
}

export function getActionOnSubmitCallbackPathPlaceholderKey() {
  return ['action.on_submit_callback_path_placeholder'] as const
}

export function getFormMetadataUrlPathPlaceholderKey() {
  return ['form_metadata_url_path_placeholder'] as const
}

export function getModalFormTypeaheadUrlPathPlaceholderKey() {
  return ['modal_form_typeahead_url_path_placeholder'] as const
}

export function getOnChangeCallbackPathPlaceholderKey() {
  return ['on_change_callback_path_placeholder'] as const
}

export function getOnSubmitCallbackPathPlaceholderKey() {
  return ['on_submit_callback_path_placeholder'] as const
}

export function getResourceAttachUrlPathPlaceholderKey() {
  return ['resource_attach_url_path_placeholder'] as const
}

export function getResourceTypeaheadUrlPathPlaceholderKey() {
  return ['resource_typeahead_url_path_placeholder'] as const
}

export function getRuleActionTypeaheadUrlPathPlaceholderKey() {
  return ['rule_action_typeahead_url_path_placeholder'] as const
}

export function getRunActionUrlPathPlaceholderKey() {
  return ['run_action_url_path_placeholder'] as const
}

export function getWidgetMetadataUrlPathPlaceholderKey() {
  return ['widget_metadata_url_path_placeholder'] as const
}

export function getGetWidgetMetadataUrlPathPlaceholderKey(
  args: InferRequestType<typeof client.widget_metadata_url_path_placeholder.$get>,
) {
  return [
    'widget_metadata_url_path_placeholder',
    '/widget_metadata_url_path_placeholder',
    args,
  ] as const
}

export function useGetWidgetMetadataUrlPathPlaceholder<TError = unknown>(
  args: InferRequestType<typeof client.widget_metadata_url_path_placeholder.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.widget_metadata_url_path_placeholder.$get>>
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
        ? getGetWidgetMetadataUrlPathPlaceholderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.widget_metadata_url_path_placeholder.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.widget_metadata_url_path_placeholder.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWidgetMetadataUrlPathPlaceholder<TError = unknown>(
  args: InferRequestType<typeof client.widget_metadata_url_path_placeholder.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.widget_metadata_url_path_placeholder.$get>>
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
        ? getGetWidgetMetadataUrlPathPlaceholderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.widget_metadata_url_path_placeholder.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.widget_metadata_url_path_placeholder.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostResourceAttachUrlPathPlaceholderKey() {
  return [
    'resource_attach_url_path_placeholder',
    '/resource_attach_url_path_placeholder',
    'POST',
  ] as const
}

export function usePostResourceAttachUrlPathPlaceholder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.resource_attach_url_path_placeholder.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.resource_attach_url_path_placeholder.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostResourceAttachUrlPathPlaceholderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.resource_attach_url_path_placeholder.$post> },
      ) => parseResponse(client.resource_attach_url_path_placeholder.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetResourceTypeaheadUrlPathPlaceholderKey(
  args: InferRequestType<typeof client.resource_typeahead_url_path_placeholder.$get>,
) {
  return [
    'resource_typeahead_url_path_placeholder',
    '/resource_typeahead_url_path_placeholder',
    args,
  ] as const
}

export function useGetResourceTypeaheadUrlPathPlaceholder<TError = unknown>(
  args: InferRequestType<typeof client.resource_typeahead_url_path_placeholder.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.resource_typeahead_url_path_placeholder.$get>>
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
        ? getGetResourceTypeaheadUrlPathPlaceholderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.resource_typeahead_url_path_placeholder.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.resource_typeahead_url_path_placeholder.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourceTypeaheadUrlPathPlaceholder<TError = unknown>(
  args: InferRequestType<typeof client.resource_typeahead_url_path_placeholder.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.resource_typeahead_url_path_placeholder.$get>>
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
        ? getGetResourceTypeaheadUrlPathPlaceholderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.resource_typeahead_url_path_placeholder.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.resource_typeahead_url_path_placeholder.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFormMetadataUrlPathPlaceholderKey(
  args: InferRequestType<typeof client.form_metadata_url_path_placeholder.$get>,
) {
  return [
    'form_metadata_url_path_placeholder',
    '/form_metadata_url_path_placeholder',
    args,
  ] as const
}

export function useGetFormMetadataUrlPathPlaceholder<TError = unknown>(
  args: InferRequestType<typeof client.form_metadata_url_path_placeholder.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.form_metadata_url_path_placeholder.$get>>
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
        ? getGetFormMetadataUrlPathPlaceholderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.form_metadata_url_path_placeholder.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.form_metadata_url_path_placeholder.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormMetadataUrlPathPlaceholder<TError = unknown>(
  args: InferRequestType<typeof client.form_metadata_url_path_placeholder.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.form_metadata_url_path_placeholder.$get>>
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
        ? getGetFormMetadataUrlPathPlaceholderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.form_metadata_url_path_placeholder.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.form_metadata_url_path_placeholder.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetModalFormTypeaheadUrlPathPlaceholderKey(
  args: InferRequestType<typeof client.modal_form_typeahead_url_path_placeholder.$get>,
) {
  return [
    'modal_form_typeahead_url_path_placeholder',
    '/modal_form_typeahead_url_path_placeholder',
    args,
  ] as const
}

export function useGetModalFormTypeaheadUrlPathPlaceholder<TError = unknown>(
  args: InferRequestType<typeof client.modal_form_typeahead_url_path_placeholder.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.modal_form_typeahead_url_path_placeholder.$get>>
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
        ? getGetModalFormTypeaheadUrlPathPlaceholderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.modal_form_typeahead_url_path_placeholder.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.modal_form_typeahead_url_path_placeholder.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetModalFormTypeaheadUrlPathPlaceholder<TError = unknown>(
  args: InferRequestType<typeof client.modal_form_typeahead_url_path_placeholder.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.modal_form_typeahead_url_path_placeholder.$get>>
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
        ? getGetModalFormTypeaheadUrlPathPlaceholderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.modal_form_typeahead_url_path_placeholder.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.modal_form_typeahead_url_path_placeholder.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRuleActionTypeaheadUrlPathPlaceholderKey(
  args: InferRequestType<typeof client.rule_action_typeahead_url_path_placeholder.$get>,
) {
  return [
    'rule_action_typeahead_url_path_placeholder',
    '/rule_action_typeahead_url_path_placeholder',
    args,
  ] as const
}

export function useGetRuleActionTypeaheadUrlPathPlaceholder<TError = unknown>(
  args: InferRequestType<typeof client.rule_action_typeahead_url_path_placeholder.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.rule_action_typeahead_url_path_placeholder.$get>>
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
        ? getGetRuleActionTypeaheadUrlPathPlaceholderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.rule_action_typeahead_url_path_placeholder.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rule_action_typeahead_url_path_placeholder.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRuleActionTypeaheadUrlPathPlaceholder<TError = unknown>(
  args: InferRequestType<typeof client.rule_action_typeahead_url_path_placeholder.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.rule_action_typeahead_url_path_placeholder.$get>>
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
        ? getGetRuleActionTypeaheadUrlPathPlaceholderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.rule_action_typeahead_url_path_placeholder.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rule_action_typeahead_url_path_placeholder.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOnChangeCallbackPathPlaceholderKey() {
  return [
    'on_change_callback_path_placeholder',
    '/on_change_callback_path_placeholder',
    'POST',
  ] as const
}

export function usePostOnChangeCallbackPathPlaceholder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.on_change_callback_path_placeholder.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.on_change_callback_path_placeholder.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOnChangeCallbackPathPlaceholderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.on_change_callback_path_placeholder.$post> },
      ) => parseResponse(client.on_change_callback_path_placeholder.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOnSubmitCallbackPathPlaceholderKey() {
  return [
    'on_submit_callback_path_placeholder',
    '/on_submit_callback_path_placeholder',
    'POST',
  ] as const
}

export function usePostOnSubmitCallbackPathPlaceholder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.on_submit_callback_path_placeholder.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.on_submit_callback_path_placeholder.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOnSubmitCallbackPathPlaceholderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.on_submit_callback_path_placeholder.$post> },
      ) => parseResponse(client.on_submit_callback_path_placeholder.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRunActionUrlPathPlaceholderKey() {
  return ['run_action_url_path_placeholder', '/run_action_url_path_placeholder', 'POST'] as const
}

export function usePostRunActionUrlPathPlaceholder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.run_action_url_path_placeholder.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.run_action_url_path_placeholder.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRunActionUrlPathPlaceholderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.run_action_url_path_placeholder.$post> },
      ) => parseResponse(client.run_action_url_path_placeholder.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionMetadataUrlPathPlaceholderKey(
  args: InferRequestType<(typeof client)['action.metadata_url_path_placeholder']['$get']>,
) {
  return [
    'action.metadata_url_path_placeholder',
    '/action.metadata_url_path_placeholder',
    args,
  ] as const
}

export function useGetActionMetadataUrlPathPlaceholder<TError = unknown>(
  args: InferRequestType<(typeof client)['action.metadata_url_path_placeholder']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['action.metadata_url_path_placeholder']['$get']>>
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
        ? getGetActionMetadataUrlPathPlaceholderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['action.metadata_url_path_placeholder']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['action.metadata_url_path_placeholder'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionMetadataUrlPathPlaceholder<TError = unknown>(
  args: InferRequestType<(typeof client)['action.metadata_url_path_placeholder']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['action.metadata_url_path_placeholder']['$get']>>
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
        ? getGetActionMetadataUrlPathPlaceholderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['action.metadata_url_path_placeholder']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['action.metadata_url_path_placeholder'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionOnChangeCallbackPathPlaceholderKey() {
  return [
    'action.on_change_callback_path_placeholder',
    '/action.on_change_callback_path_placeholder',
    'POST',
  ] as const
}

export function usePostActionOnChangeCallbackPathPlaceholder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['action.on_change_callback_path_placeholder']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['action.on_change_callback_path_placeholder']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionOnChangeCallbackPathPlaceholderKey()
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
            (typeof client)['action.on_change_callback_path_placeholder']['$post']
          >
        },
      ) =>
        parseResponse(
          client['action.on_change_callback_path_placeholder'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostActionOnSubmitCallbackPathPlaceholderKey() {
  return [
    'action.on_submit_callback_path_placeholder',
    '/action.on_submit_callback_path_placeholder',
    'POST',
  ] as const
}

export function usePostActionOnSubmitCallbackPathPlaceholder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['action.on_submit_callback_path_placeholder']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['action.on_submit_callback_path_placeholder']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionOnSubmitCallbackPathPlaceholderKey()
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
            (typeof client)['action.on_submit_callback_path_placeholder']['$post']
          >
        },
      ) =>
        parseResponse(
          client['action.on_submit_callback_path_placeholder'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
