import { createRoute, z } from '@hono/zod-openapi'

const CloudHealthcareSourceSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Full path of a Cloud Healthcare API resource.' }),
  })
  .openapi({ description: 'Cloud Healthcare API resource.', required: [] })
  .openapi('CloudHealthcareSource')

const AnnotationSourceSchema = z
  .object({
    cloudHealthcareSource: CloudHealthcareSourceSchema.exactOptional().openapi({
      description: 'Cloud Healthcare API resource.',
    }),
  })
  .openapi({
    description: 'AnnotationSource holds the source information of the annotation.',
    required: [],
  })
  .openapi('AnnotationSource')

const VertexSchema = z
  .object({
    x: z.float32().exactOptional().openapi({ description: 'X coordinate.' }),
    y: z.float32().exactOptional().openapi({ description: 'Y coordinate.' }),
  })
  .openapi({
    description: 'A 2D coordinate in an image. The origin is the top-left.',
    required: [],
  })
  .openapi('Vertex')

const BoundingPolySchema = z
  .object({
    label: z.string().exactOptional().openapi({ description: 'A description of this polygon.' }),
    vertices: z
      .array(VertexSchema)
      .exactOptional()
      .openapi({ description: 'List of the vertices of this polygon.' }),
  })
  .openapi({ description: 'A bounding polygon for the detected image annotation.', required: [] })
  .openapi('BoundingPoly')

const ImageAnnotationSchema = z
  .object({
    boundingPolys: z
      .array(BoundingPolySchema)
      .exactOptional()
      .openapi({
        description: 'The list of polygons outlining the sensitive regions in the image.',
      }),
    frameIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          '0-based index of the image frame. For example, an image frame in a DICOM instance.',
      }),
  })
  .openapi({ description: 'Image annotation.', required: [] })
  .openapi('ImageAnnotation')

const ResourceAnnotationSchema = z
  .object({
    label: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of the annotation record.' }),
  })
  .openapi({ description: 'Resource level annotation.', required: [] })
  .openapi('ResourceAnnotation')

const FindingSchema = z
  .object({
    end: z
      .string()
      .exactOptional()
      .openapi({ description: 'Zero-based ending index of the found text, exclusively.' }),
    infoType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of information stored in this text range. For example, HumanName, BirthDate, or Address.',
      }),
    quote: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The snippet of the sensitive text. This field is only populated during deidentification if `store_quote` is set to true in DeidentifyConfig.',
      }),
    start: z
      .string()
      .exactOptional()
      .openapi({ description: 'Zero-based starting index of the found text, inclusively.' }),
  })
  .openapi({ required: [] })
  .openapi('Finding')

const DetailSchema = z
  .object({ findings: z.array(FindingSchema).exactOptional() })
  .openapi({
    description: 'Contains multiple sensitive information findings for each resource slice.',
    required: [],
  })
  .openapi('Detail')

const SensitiveTextAnnotationSchema = z
  .object({
    details: z
      .record(z.string(), DetailSchema)
      .exactOptional()
      .openapi({
        description:
          'Maps from a resource slice. For example, FHIR resource field path to a set of sensitive text findings. For example, Appointment.Narrative text1 --> {findings_1, findings_2, findings_3}',
      }),
  })
  .openapi({
    description: 'A TextAnnotation specifies a text range that includes sensitive information.',
    required: [],
  })
  .openapi('SensitiveTextAnnotation')

type AnnotationType = {
  annotationSource?: z.infer<typeof AnnotationSourceSchema>
  customData?: { [key: string]: string }
  imageAnnotation?: z.infer<typeof ImageAnnotationSchema>
  name?: string
  resourceAnnotation?: z.infer<typeof ResourceAnnotationSchema>
  textAnnotation?: z.infer<typeof SensitiveTextAnnotationSchema>
}

const SchemaGroupSchema: z.ZodType<SchemaGroupType> = z
  .lazy(() =>
    z
      .object({
        choice: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'True indicates that this is a choice group, meaning that only one of its segments can exist in a given message.',
          }),
        maxOccurs: z
          .int32()
          .exactOptional()
          .openapi({
            description:
              'The maximum number of times this group can be repeated. 0 or -1 means unbounded.',
          }),
        members: z
          .array(GroupOrSegmentSchema)
          .exactOptional()
          .openapi({ description: 'Nested groups and/or segments.' }),
        minOccurs: z
          .int32()
          .exactOptional()
          .openapi({
            description: 'The minimum number of times this group must be present/repeated.',
          }),
        name: z
          .string()
          .exactOptional()
          .openapi({ description: 'The name of this group. For example, "ORDER_DETAIL".' }),
      })
      .openapi({ description: 'An HL7v2 logical group construct.', required: [] }),
  )
  .openapi('SchemaGroup')

type SchemaSegmentType = { maxOccurs?: number; minOccurs?: number; type?: string }

const SchemaSegmentSchema: z.ZodType<SchemaSegmentType> = z
  .object({
    maxOccurs: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of times this segment can be present in this group. 0 or -1 means unbounded.',
      }),
    minOccurs: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The minimum number of times this segment can be present in this group.',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Segment type. For example, "PID".' }),
  })
  .openapi({ description: 'An HL7v2 Segment.', required: [] })
  .openapi('SchemaSegment')

type GroupOrSegmentType = {
  group?: z.infer<typeof SchemaGroupSchema>
  segment?: z.infer<typeof SchemaSegmentSchema>
}

const GroupOrSegmentSchema: z.ZodType<GroupOrSegmentType> = z
  .lazy(() =>
    z
      .object({
        group: SchemaGroupSchema.exactOptional(),
        segment: SchemaSegmentSchema.exactOptional(),
      })
      .openapi({
        description: 'Construct representing a logical group or a segment.',
        required: [],
      }),
  )
  .openapi('GroupOrSegment')

type SchemaGroupType = {
  choice?: boolean
  maxOccurs?: number
  members?: z.infer<typeof GroupOrSegmentSchema>[]
  minOccurs?: number
  name?: string
}

const ImageConfigSchema = z
  .object({
    additionalInfoTypes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Additional InfoTypes to redact in the images in addition to those used by `text_redaction_mode`. Can only be used when `text_redaction_mode` is set to `REDACT_SENSITIVE_TEXT`, `REDACT_SENSITIVE_TEXT_CLEAN_DESCRIPTORS` or `TEXT_REDACTION_MODE_UNSPECIFIED`.',
      }),
    excludeInfoTypes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'InfoTypes to skip redacting, overriding those used by `text_redaction_mode`. Can only be used when `text_redaction_mode` is set to `REDACT_SENSITIVE_TEXT` or `REDACT_SENSITIVE_TEXT_CLEAN_DESCRIPTORS`.',
      }),
    textRedactionMode: z
      .enum([
        'TEXT_REDACTION_MODE_UNSPECIFIED',
        'REDACT_ALL_TEXT',
        'REDACT_SENSITIVE_TEXT',
        'REDACT_NO_TEXT',
        'REDACT_SENSITIVE_TEXT_CLEAN_DESCRIPTORS',
      ])
      .exactOptional()
      .openapi({ description: 'Determines how to redact text from image.' }),
  })
  .openapi({
    description: 'Specifies how to handle de-identification of image pixels.',
    required: [],
  })
  .openapi('ImageConfig')

const CleanTextTagSchema = z
  .object({})
  .openapi({
    description:
      'Inspect text and transform sensitive text. Configurable using `TextConfig`. Supported [Value Representations] (http://dicom.nema.org/medical/dicom/2018e/output/chtml/part05/sect_6.2.html#table_6.2-1): AE, LO, LT, PN, SH, ST, UC, UT, DA, DT, AS',
  })
  .openapi('CleanTextTag')

const DeleteTagSchema = z.object({}).openapi({ description: 'Delete tag.' }).openapi('DeleteTag')

const KeepTagSchema = z
  .object({})
  .openapi({ description: 'Keep tag unchanged.' })
  .openapi('KeepTag')

const RecurseTagSchema = z
  .object({})
  .openapi({
    description:
      'Recursively apply DICOM de-id to tags nested in a sequence. Supported [Value Representation] (http://dicom.nema.org/medical/dicom/2018e/output/chtml/part05/sect_6.2.html#table_6.2-1): SQ',
  })
  .openapi('RecurseTag')

const RegenUidTagSchema = z
  .object({})
  .openapi({
    description:
      'Replace UID with a new generated UID. Supported [Value Representation] (http://dicom.nema.org/medical/dicom/2018e/output/chtml/part05/sect_6.2.html#table_6.2-1): UI',
  })
  .openapi('RegenUidTag')

const RemoveTagSchema = z
  .object({})
  .openapi({ description: 'Replace with empty tag.' })
  .openapi('RemoveTag')

const ResetTagSchema = z
  .object({})
  .openapi({ description: 'Reset tag to a placeholder value.' })
  .openapi('ResetTag')

const ActionSchema = z
  .object({
    cleanImageTag: ImageConfigSchema.exactOptional().openapi({
      description:
        "Inspect image and transform sensitive burnt-in text. Doesn't apply to elements nested in a sequence, which revert to `Keep`. Supported [tags](http://dicom.nema.org/medical/dicom/2018e/output/chtml/part06/chapter_6.html): PixelData",
    }),
    cleanTextTag: CleanTextTagSchema.exactOptional().openapi({
      description:
        'Inspect text and transform sensitive text. Configurable via TextConfig. Supported Value Representations: AE, LO, LT, PN, SH, ST, UC, UT, DA, DT, AS',
    }),
    deleteTag: DeleteTagSchema.exactOptional().openapi({ description: 'Delete tag.' }),
    keepTag: KeepTagSchema.exactOptional().openapi({ description: 'Keep tag unchanged.' }),
    queries: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Select all tags with the listed tag IDs, names, or Value Representations (VRs). Examples: ID: "00100010" Keyword: "PatientName" VR: "PN"',
      }),
    recurseTag: RecurseTagSchema.exactOptional().openapi({
      description:
        'Recursively apply DICOM de-id to tags nested in a sequence. Supported [Value Representation] (http://dicom.nema.org/medical/dicom/2018e/output/chtml/part05/sect_6.2.html#table_6.2-1): SQ',
    }),
    regenUidTag: RegenUidTagSchema.exactOptional().openapi({
      description:
        'Replace UID with a new generated UID. Supported [Value Representation] (http://dicom.nema.org/medical/dicom/2018e/output/chtml/part05/sect_6.2.html#table_6.2-1): UI',
    }),
    removeTag: RemoveTagSchema.exactOptional().openapi({ description: 'Replace with empty tag.' }),
    resetTag: ResetTagSchema.exactOptional().openapi({
      description: 'Reset tag to a placeholder value.',
    }),
  })
  .openapi({
    description: 'Specifies a selection of tags and an `Action` to apply to each one.',
    required: [],
  })
  .openapi('Action')

const ActivateConsentRequestSchema = z
  .object({
    consentArtifact: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The resource name of the Consent artifact that contains documentation of the user's consent, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consentArtifacts/{consent_artifact_id}`. If the draft Consent had a Consent artifact, this Consent artifact overwrites it.",
      }),
    expireTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timestamp in UTC of when this Consent is considered expired.' }),
    ttl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The time to live for this Consent from when it is marked as active.',
      }),
  })
  .openapi({
    description:
      'Activates the latest revision of the specified Consent by committing a new revision with `state` updated to `ACTIVE`. If the latest revision of the given Consent is in the `ACTIVE` state, no new revision is committed. A FAILED_PRECONDITION error occurs if the latest revision of the given consent is in the `REJECTED` or `REVOKED` state.',
    required: [],
  })
  .openapi('ActivateConsentRequest')

const AnalyzeEntitiesRequestSchema = z
  .object({
    documentContent: z
      .string()
      .exactOptional()
      .openapi({ description: 'document_content is a document to be annotated.' }),
    licensedVocabularies: z
      .array(z.enum(['LICENSED_VOCABULARY_UNSPECIFIED', 'ICD10CM', 'SNOMEDCT_US']))
      .exactOptional()
      .openapi({
        description:
          'A list of licensed vocabularies to use in the request, in addition to the default unlicensed vocabularies.',
      }),
  })
  .openapi({
    description: 'The request to analyze healthcare entities in a document.',
    required: [],
  })
  .openapi('AnalyzeEntitiesRequest')

const EntitySchema = z
  .object({
    entityId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'entity_id is a first class field entity_id uniquely identifies this concept and its meta-vocabulary. For example, "UMLS/C0000970".',
      }),
    preferredTerm: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'preferred_term is the preferred term for this concept. For example, "Acetaminophen". For ad hoc entities formed by normalization, this is the most popular unnormalized string.',
      }),
    vocabularyCodes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Vocabulary codes are first-class fields and differentiated from the concept unique identifier (entity_id). vocabulary_codes contains the representation of this concept in particular vocabularies, such as ICD-10, SNOMED-CT and RxNORM. These are prefixed by the name of the vocabulary, followed by the unique code within that vocabulary. For example, "RXNORM/A10334543".',
      }),
  })
  .openapi({
    description: 'The candidate entities that an entity mention could link to.',
    required: [],
  })
  .openapi('Entity')

const FeatureSchema = z
  .object({
    confidence: z
      .float64()
      .exactOptional()
      .openapi({
        description: "The model's confidence in this feature annotation. A number between 0 and 1.",
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value of this feature annotation. Its range depends on the type of the feature.',
      }),
  })
  .openapi({ description: 'A feature of an entity mention.', required: [] })
  .openapi('Feature')

const LinkedEntitySchema = z
  .object({
    entityId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'entity_id is a concept unique identifier. These are prefixed by a string that identifies the entity coding system, followed by the unique identifier within that system. For example, "UMLS/C0000970". This also supports ad hoc entities, which are formed by normalizing entity mention content.',
      }),
  })
  .openapi({
    description:
      'EntityMentions can be linked to multiple entities using a LinkedEntity message lets us add other fields, e.g. confidence.',
    required: [],
  })
  .openapi('LinkedEntity')

const TextSpanSchema = z
  .object({
    beginOffset: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The unicode codepoint index of the beginning of this span.' }),
    content: z
      .string()
      .exactOptional()
      .openapi({ description: 'The original text contained in this span.' }),
  })
  .openapi({ description: 'A span of text in the provided document.', required: [] })
  .openapi('TextSpan')

const EntityMentionSchema = z
  .object({
    certaintyAssessment: FeatureSchema.exactOptional().openapi({
      description:
        'The certainty assessment of the entity mention. Its value is one of: LIKELY, SOMEWHAT_LIKELY, UNCERTAIN, SOMEWHAT_UNLIKELY, UNLIKELY, CONDITIONAL',
    }),
    confidence: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          "The model's confidence in this entity mention annotation. A number between 0 and 1.",
      }),
    linkedEntities: z
      .array(LinkedEntitySchema)
      .exactOptional()
      .openapi({
        description:
          'linked_entities are candidate ontological concepts that this entity mention may refer to. They are sorted by decreasing confidence.',
      }),
    mentionId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'mention_id uniquely identifies each entity mention in a single response.',
      }),
    subject: FeatureSchema.exactOptional().openapi({
      description:
        'The subject this entity mention relates to. Its value is one of: PATIENT, FAMILY_MEMBER, OTHER',
    }),
    temporalAssessment: FeatureSchema.exactOptional().openapi({
      description:
        'How this entity mention relates to the subject temporally. Its value is one of: CURRENT, CLINICAL_HISTORY, FAMILY_HISTORY, UPCOMING, ALLERGY',
    }),
    text: TextSpanSchema.exactOptional().openapi({
      description: 'text is the location of the entity mention in the document.',
    }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The semantic type of the entity: UNKNOWN_ENTITY_TYPE, ALONE, ANATOMICAL_STRUCTURE, ASSISTED_LIVING, BF_RESULT, BM_RESULT, BM_UNIT, BM_VALUE, BODY_FUNCTION, BODY_MEASUREMENT, COMPLIANT, DOESNOT_FOLLOWUP, FAMILY, FOLLOWSUP, LABORATORY_DATA, LAB_RESULT, LAB_UNIT, LAB_VALUE, MEDICAL_DEVICE, MEDICINE, MED_DOSE, MED_DURATION, MED_FORM, MED_FREQUENCY, MED_ROUTE, MED_STATUS, MED_STRENGTH, MED_TOTALDOSE, MED_UNIT, NON_COMPLIANT, OTHER_LIVINGSTATUS, PROBLEM, PROCEDURE, PROCEDURE_RESULT, PROC_METHOD, REASON_FOR_NONCOMPLIANCE, SEVERITY, SUBSTANCE_ABUSE, UNCLEAR_FOLLOWUP.',
      }),
  })
  .openapi({ description: 'An entity mention in the document.', required: [] })
  .openapi('EntityMention')

const EntityMentionRelationshipSchema = z
  .object({
    confidence: z
      .float64()
      .exactOptional()
      .openapi({
        description: "The model's confidence in this annotation. A number between 0 and 1.",
      }),
    objectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'object_id is the id of the object entity mention.' }),
    subjectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'subject_id is the id of the subject entity mention.' }),
  })
  .openapi({
    description: 'Defines directed relationship from one entity mention to another.',
    required: [],
  })
  .openapi('EntityMentionRelationship')

const AnalyzeEntitiesResponseSchema = z
  .object({
    entities: z
      .array(EntitySchema)
      .exactOptional()
      .openapi({
        description:
          'The union of all the candidate entities that the entity_mentions in this response could link to. These are UMLS concepts or normalized mention content.',
      }),
    entityMentions: z
      .array(EntityMentionSchema)
      .exactOptional()
      .openapi({
        description:
          'entity_mentions contains all the annotated medical entities that were mentioned in the provided document.',
      }),
    relationships: z
      .array(EntityMentionRelationshipSchema)
      .exactOptional()
      .openapi({
        description:
          'relationships contains all the binary relationships that were identified between entity mentions within the provided document.',
      }),
  })
  .openapi({
    description: 'Includes recognized entity mentions and relationships between them.',
    required: [],
  })
  .openapi('AnalyzeEntitiesResponse')

const AnnotationSchema: z.ZodType<AnnotationType> = z
  .lazy(() =>
    z
      .object({
        annotationSource: AnnotationSourceSchema.exactOptional().openapi({
          description: 'Details of the source.',
        }),
        customData: z
          .record(z.string(), z.string())
          .exactOptional()
          .openapi({
            description:
              'Additional information for this annotation record, such as annotator and verifier information or study campaign.',
          }),
        imageAnnotation: ImageAnnotationSchema.exactOptional().openapi({
          description: 'Annotations for images. For example, bounding polygons.',
        }),
        name: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Resource name of the Annotation, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/annotationStores/{annotation_store_id}/annotations/{annotation_id}`.',
          }),
        resourceAnnotation: ResourceAnnotationSchema.exactOptional().openapi({
          description: 'Annotations for resource. For example, classification tags.',
        }),
        textAnnotation: SensitiveTextAnnotationSchema.exactOptional().openapi({
          description:
            'Annotations for sensitive texts. For example, a range that describes the location of sensitive text.',
        }),
      })
      .openapi({ description: 'An annotation record.', required: [] }),
  )
  .openapi('Annotation')

const AnnotationConfigSchema = z
  .object({
    annotationStoreName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the annotation store, in the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/annotationStores/{annotation_store_id}`). * The destination annotation store must be in the same project as the source data. De-identifying data across multiple projects is not supported. * The destination annotation store must exist when using DeidentifyDicomStore or DeidentifyFhirStore. DeidentifyDataset automatically creates the destination annotation store.',
      }),
    storeQuote: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set to true, the sensitive texts are included in SensitiveTextAnnotation of Annotation.',
      }),
  })
  .openapi({
    description: 'Specifies how to store annotations during de-identification operation.',
    required: [],
  })
  .openapi('AnnotationConfig')

const AnnotationStoreSchema = z
  .object({
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. User-supplied key-value pairs used to organize Annotation stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \\p{Ll}\\p{Lo}{0,62} Label values must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\\p{Ll}\\p{Lo}\\p{N}_-]{0,63} No more than 64 labels can be associated with a given store.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name of the Annotation store, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/annotationStores/{annotation_store_id}`.',
      }),
  })
  .openapi({
    description:
      'An Annotation store that can store annotation resources such as labels and tags for text, image and audio.',
    required: [],
  })
  .openapi('AnnotationStore')

const ArchiveUserDataMappingRequestSchema = z
  .object({})
  .openapi({ description: 'Archives the specified User data mapping.' })
  .openapi('ArchiveUserDataMappingRequest')

const ArchiveUserDataMappingResponseSchema = z
  .object({})
  .openapi({ description: 'Archives the specified User data mapping.' })
  .openapi('ArchiveUserDataMappingResponse')

const AttributeSchema = z
  .object({
    attributeDefinitionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Indicates the name of an attribute defined in the consent store.' }),
    values: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The value of the attribute. Must be an acceptable value as defined in the consent store. For example, if the consent store defines "data type" with acceptable values "questionnaire" and "step-count", when the attribute name is data type, this field must contain one of those values.',
      }),
  })
  .openapi({
    description:
      'An attribute value for a Consent or User data mapping. Each Attribute must have a corresponding AttributeDefinition in the consent store that defines the default and allowed values.',
    required: [],
  })
  .openapi('Attribute')

const AttributeDefinitionSchema = z
  .object({
    allowedValues: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. Possible values for the attribute. The number of allowed values must not exceed 500. An empty list is invalid. The list can only be expanded after creation.',
      }),
    category: z
      .enum(['CATEGORY_UNSPECIFIED', 'RESOURCE', 'REQUEST'])
      .exactOptional()
      .openapi({
        description:
          'Required. The category of the attribute. The value of this field cannot be changed after creation.',
      }),
    consentDefaultValues: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. Default values of the attribute in Consents. If no default values are specified, it defaults to an empty value.',
      }),
    dataMappingDefaultValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Default value of the attribute in User data mappings. If no default value is specified, it defaults to an empty value. This field is only applicable to attributes of the category `RESOURCE`.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. A description of the attribute.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name of the Attribute definition, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/attributeDefinitions/{attribute_definition_id}`. Cannot be changed after creation.',
      }),
  })
  .openapi({ description: 'A client-defined consent attribute.', required: [] })
  .openapi('AttributeDefinition')

const AuditLogConfigSchema = z
  .object({
    exemptedMembers: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.',
      }),
    logType: z
      .enum(['LOG_TYPE_UNSPECIFIED', 'ADMIN_READ', 'DATA_WRITE', 'DATA_READ'])
      .exactOptional()
      .openapi({ description: 'The log type that this config enables.' }),
  })
  .openapi({
    description:
      'Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables \'DATA_READ\' and \'DATA_WRITE\' logging, while exempting jose@example.com from DATA_READ logging.',
    required: [],
  })
  .openapi('AuditLogConfig')

const AuditConfigSchema = z
  .object({
    auditLogConfigs: z
      .array(AuditLogConfigSchema)
      .exactOptional()
      .openapi({ description: 'The configuration for logging of each type of permission.' }),
    service: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.',
      }),
  })
  .openapi({
    description:
      'Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging.',
    required: [],
  })
  .openapi('AuditConfig')

const SegmentSchema = z
  .object({
    fields: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'A mapping from the positional location to the value. The key string uses zero-based indexes separated by dots to identify Fields, components and sub-components. A bracket notation is also used to identify different instances of a repeated field. Regex for key: (\\d+)(\\[\\d+\\])?(.\\d+)?(.\\d+)? Examples of (key, value) pairs: * (0.1, "hemoglobin") denotes that the first component of Field 0 has the value "hemoglobin". * (1.1.2, "CBC") denotes that the second sub-component of the first component of Field 1 has the value "CBC". * (1[0].1, "HbA1c") denotes that the first component of the first Instance of Field 1, which is repeated, has the value "HbA1c".',
      }),
    segmentId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string that indicates the type of segment. For example, EVN or PID.',
      }),
    setId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Set ID for segments that can be in a set. This can be empty if it's missing or isn't applicable.",
      }),
  })
  .openapi({ description: 'A segment in a structured format.', required: [] })
  .openapi('Segment')

const ParsedDataSchema = z
  .object({ segments: z.array(SegmentSchema).exactOptional() })
  .openapi({ description: 'The content of an HL7v2 message in a structured format.', required: [] })
  .openapi('ParsedData')

const PatientIdSchema = z
  .object({
    type: z.string().exactOptional().openapi({ description: 'ID type. For example, MRN or NHS.' }),
    value: z.string().exactOptional().openapi({ description: "The patient's unique identifier." }),
  })
  .openapi({ description: 'A patient identifier and associated type.', required: [] })
  .openapi('PatientId')

const SchematizedDataSchema = z
  .object({
    data: z.string().exactOptional().openapi({ description: 'JSON output of the parser.' }),
    error: z.string().exactOptional().openapi({ description: 'The error output of the parser.' }),
  })
  .openapi({
    description: 'The content of an HL7v2 message in a structured format as specified by a schema.',
    required: [],
  })
  .openapi('SchematizedData')

const MessageSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The datetime when the message was created. Set by the server.',
        readOnly: true,
      }),
    data: z.string().exactOptional().openapi({ description: 'Raw message bytes.' }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'User-supplied key-value pairs used to organize HL7v2 stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \\p{Ll}\\p{Lo}{0,62} Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\\p{Ll}\\p{Lo}\\p{N}_-]{0,63} No more than 64 labels can be associated with a given store.',
      }),
    messageType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The message type for this message. MSH-9.1.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name of the Message, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/hl7V2Stores/{hl7_v2_store_id}/messages/{message_id}`. Assigned by the server.',
      }),
    parsedData: ParsedDataSchema.exactOptional().openapi({
      description: 'Output only. The parsed version of the raw message data.',
      readOnly: true,
    }),
    patientIds: z
      .array(PatientIdSchema)
      .exactOptional()
      .openapi({
        description:
          'All patient IDs listed in the PID-2, PID-3, and PID-4 segments of this message.',
      }),
    schematizedData: SchematizedDataSchema.exactOptional().openapi({
      description:
        "The parsed version of the raw message data schematized according to this store's schemas and type definitions.",
    }),
    sendFacility: z
      .string()
      .exactOptional()
      .openapi({ description: 'The hospital that this message came from. MSH-4.' }),
    sendTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The datetime the sending application sent this message. MSH-7.' }),
  })
  .openapi({
    description:
      'A complete HL7v2 message. See [Introduction to HL7 Standards] (https://www.hl7.org/implement/standards/index.cfm?ref=common) for details on the standard.',
    required: [],
  })
  .openapi('Message')

const BatchGetMessagesResponseSchema = z
  .object({
    messages: z
      .array(MessageSchema)
      .exactOptional()
      .openapi({ description: 'The returned Messages. See `MessageView` for populated fields.' }),
  })
  .openapi({ description: 'Gets multiple messages in a specified HL7v2 store.', required: [] })
  .openapi('BatchGetMessagesResponse')

const ExprSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.',
      }),
    expression: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Textual representation of an expression in Common Expression Language syntax.',
      }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.',
      }),
  })
  .openapi({
    description:
      'Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != \'private\' && document.type != \'internal\'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "\'New message received at \' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.',
    required: [],
  })
  .openapi('Expr')

const BindingSchema = z
  .object({
    condition: ExprSchema.exactOptional().openapi({
      description:
        'The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).',
    }),
    members: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding.',
      }),
    role: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.',
      }),
  })
  .openapi({ description: 'Associates `members`, or principals, with a `role`.', required: [] })
  .openapi('Binding')

const CancelOperationRequestSchema = z
  .object({})
  .openapi({ description: 'The request message for Operations.CancelOperation.' })
  .openapi('CancelOperationRequest')

const CharacterMaskConfigSchema = z
  .object({
    maskingCharacter: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Character to mask the sensitive values. If not supplied, defaults to "*".',
      }),
  })
  .openapi({
    description: 'Mask a string by replacing its characters with a fixed character.',
    required: [],
  })
  .openapi('CharacterMaskConfig')

const CharacterMaskFieldSchema = z
  .object({})
  .openapi({
    description:
      'Replace field value with masking character. Supported [types](https://www.hl7.org/fhir/datatypes.html): Code, Decimal, HumanName, Id, LanguageCode, Markdown, Oid, String, Uri, Uuid, Xhtml',
  })
  .openapi('CharacterMaskField')

const ConsentListSchema = z
  .object({
    consents: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The resource names of the Consents to evaluate against, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consents/{consent_id}`.',
      }),
  })
  .openapi({ description: 'List of resource names of Consent resources.', required: [] })
  .openapi('ConsentList')

const CheckDataAccessRequestSchema = z
  .object({
    consentList: ConsentListSchema.exactOptional().openapi({
      description:
        'Optional. Specific Consents to evaluate the access request against. These Consents must have the same `user_id` as the evaluated User data mapping, must exist in the current `consent_store`, and have a `state` of either `ACTIVE` or `DRAFT`. A maximum of 100 Consents can be provided here. If no selection is specified, the access request is evaluated against all `ACTIVE` unexpired Consents with the same `user_id` as the evaluated User data mapping.',
    }),
    dataId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The unique identifier of the resource to check access for. This identifier must correspond to a User data mapping in the given consent store.',
      }),
    requestAttributes: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'The values of request attributes associated with this access request.',
      }),
    responseView: z
      .enum(['RESPONSE_VIEW_UNSPECIFIED', 'BASIC', 'FULL'])
      .exactOptional()
      .openapi({
        description:
          'Optional. The view for CheckDataAccessResponse. If unspecified, defaults to `BASIC` and returns `consented` as `TRUE` or `FALSE`.',
      }),
  })
  .openapi({
    description:
      'Checks if a particular data_id of a User data mapping in the given consent store is consented for a given use.',
    required: [],
  })
  .openapi('CheckDataAccessRequest')

const ConsentEvaluationSchema = z
  .object({
    evaluationResult: z
      .enum([
        'EVALUATION_RESULT_UNSPECIFIED',
        'NOT_APPLICABLE',
        'NO_MATCHING_POLICY',
        'NO_SATISFIED_POLICY',
        'HAS_SATISFIED_POLICY',
      ])
      .exactOptional()
      .openapi({ description: 'The evaluation result.' }),
  })
  .openapi({ description: 'The detailed evaluation of a particular Consent.', required: [] })
  .openapi('ConsentEvaluation')

const CheckDataAccessResponseSchema = z
  .object({
    consentDetails: z
      .record(z.string(), ConsentEvaluationSchema)
      .exactOptional()
      .openapi({
        description: 'The resource names of all evaluated Consents mapped to their evaluation.',
      }),
    consented: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the requested resource is consented for the given use.' }),
  })
  .openapi({
    description:
      'Checks if a particular data_id of a User data mapping in the given consent store is consented for a given use.',
    required: [],
  })
  .openapi('CheckDataAccessResponse')

const CleanDescriptorsOptionSchema = z
  .object({})
  .openapi({
    description:
      'This option is based on the DICOM Standard\'s [Clean Descriptors Option](http://dicom.nema.org/medical/dicom/2018e/output/chtml/part15/sect_E.3.5.html), and the `CleanText` `Action` is applied to all the specified fields. When cleaning text, the process attempts to transform phrases matching any of the tags marked for removal (action codes D, Z, X, and U) in the [Basic Profile](http://dicom.nema.org/medical/dicom/2018e/output/chtml/part15/chapter_E.html). These contextual phrases are replaced with the token "[CTX]". This option uses an additional `InfoType` during inspection.',
  })
  .openapi('CleanDescriptorsOption')

const CleanTextFieldSchema = z
  .object({})
  .openapi({
    description:
      'Inspect text and transform sensitive text. Configure using `TextConfig`. Supported [types](https://www.hl7.org/fhir/datatypes.html): Code, Date, DateTime, Decimal, HumanName, Id, LanguageCode, Markdown, Oid, String, Uri, Uuid, Xhtml',
  })
  .openapi('CleanTextField')

const ConfigureSearchRequestSchema = z
  .object({
    canonicalUrls: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The canonical URLs of the search parameters that are intended to be used for the FHIR store. See https://www.hl7.org/fhir/references.html#canonical for explanation on FHIR canonical urls',
      }),
    validateOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If `validate_only` is set to true, the method will compile all the search parameters without actually setting the search config for the store and triggering the reindex.',
      }),
  })
  .openapi({
    description: 'Request to configure the search parameters for the specified FHIR store.',
    required: [],
  })
  .openapi('ConfigureSearchRequest')

const GoogleCloudHealthcareV1beta1ConsentPolicySchema = z
  .object({
    authorizationRule: ExprSchema.exactOptional().openapi({
      description:
        'Required. The request conditions to meet to grant access. In addition to any supported comparison operators, authorization rules may have `IN` operator as well as at most 10 logical operators that are limited to `AND` (`&&`), `OR` (`||`).',
    }),
    resourceAttributes: z
      .array(AttributeSchema)
      .exactOptional()
      .openapi({
        description:
          'The resources that this policy applies to. A resource is a match if it matches all the attributes listed here. If empty, this policy applies to all User data mappings for the given user.',
      }),
  })
  .openapi({
    description:
      "Represents a user's consent in terms of the resources that can be accessed and under what conditions.",
    required: [],
  })
  .openapi('GoogleCloudHealthcareV1beta1ConsentPolicy')

const ConsentSchema = z
  .object({
    consentArtifact: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The resource name of the Consent artifact that contains proof of the end user's consent, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consentArtifacts/{consent_artifact_id}`.",
      }),
    expireTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timestamp in UTC of when this Consent is considered expired.' }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. User-supplied key-value pairs used to organize Consent resources. Metadata keys must: - be between 1 and 63 characters long - have a UTF-8 encoding of maximum 128 bytes - begin with a letter - consist of up to 63 characters including lowercase letters, numeric characters, underscores, and dashes Metadata values must be: - be between 1 and 63 characters long - have a UTF-8 encoding of maximum 128 bytes - consist of up to 63 characters including lowercase letters, numeric characters, underscores, and dashes No more than 64 metadata entries can be associated with a given consent.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name of the Consent, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consents/{consent_id}`. Cannot be changed after creation.',
      }),
    policies: z
      .array(GoogleCloudHealthcareV1beta1ConsentPolicySchema)
      .exactOptional()
      .openapi({
        description:
          "Optional. Represents a user's consent in terms of the resources that can be accessed and under what conditions.",
      }),
    revisionCreateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The timestamp that the revision was created.',
        readOnly: true,
      }),
    revisionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The revision ID of the Consent. The format is an 8-character hexadecimal string. Refer to a specific revision of a Consent by appending `@{revision_id}` to the Consent's resource name.",
        readOnly: true,
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'ACTIVE', 'ARCHIVED', 'REVOKED', 'DRAFT', 'REJECTED'])
      .exactOptional()
      .openapi({ description: 'Required. Indicates the current state of this Consent.' }),
    ttl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Input only. The time to live for this Consent from when it is created.',
      }),
    userId: z
      .string()
      .exactOptional()
      .openapi({ description: "Required. User's UUID provided by the client." }),
  })
  .openapi({ description: "Represents a user's consent.", required: [] })
  .openapi('Consent')

const ImageSchema = z
  .object({
    gcsUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Input only. Points to a Cloud Storage URI containing the consent artifact content. The URI must be in the following format: `gs://{bucket_id}/{object_id}`. The Cloud Healthcare API service account must have the `roles/storage.objectViewer` Cloud IAM role for this Cloud Storage location. The consent artifact content at this URI is copied to a Cloud Storage location managed by the Cloud Healthcare API. Responses to fetching requests return the consent artifact content in raw_bytes.',
      }),
    rawBytes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Consent artifact content represented as a stream of bytes. This field is populated when returned in GetConsentArtifact response, but not included in CreateConsentArtifact and ListConsentArtifact response.',
      }),
  })
  .openapi({ description: 'Raw bytes representing consent artifact content.', required: [] })
  .openapi('Image')

const SignatureSchema = z
  .object({
    image: ImageSchema.exactOptional().openapi({
      description: "Optional. An image of the user's signature.",
    }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          "Optional. Metadata associated with the user's signature. For example, the user's name or the user's title.",
      }),
    signatureTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Timestamp of the signature.' }),
    userId: z
      .string()
      .exactOptional()
      .openapi({ description: "Required. User's UUID provided by the client." }),
  })
  .openapi({ description: 'User signature.', required: [] })
  .openapi('Signature')

const ConsentArtifactSchema = z
  .object({
    consentContentScreenshots: z
      .array(ImageSchema)
      .exactOptional()
      .openapi({
        description:
          "Optional. Screenshots, PDFs, or other binary information documenting the user's consent.",
      }),
    consentContentVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. An string indicating the version of the consent information shown to the user.',
      }),
    guardianSignature: SignatureSchema.exactOptional().openapi({
      description: 'Optional. A signature from a guardian.',
    }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. Metadata associated with the Consent artifact. For example, the consent locale or user agent version.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name of the Consent artifact, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consentArtifacts/{consent_artifact_id}`. Cannot be changed after creation.',
      }),
    userId: z
      .string()
      .exactOptional()
      .openapi({ description: "Required. User's UUID provided by the client." }),
    userSignature: SignatureSchema.exactOptional().openapi({
      description: "Optional. User's signature.",
    }),
    witnessSignature: SignatureSchema.exactOptional().openapi({
      description: 'Optional. A signature from a witness.',
    }),
  })
  .openapi({ description: "Documentation of a user's consent.", required: [] })
  .openapi('ConsentArtifact')

const ConsentStoreSchema = z
  .object({
    defaultConsentTtl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Default time to live for Consents created in this store. Must be at least 24 hours. Updating this field will not affect the expiration time of existing consents.',
      }),
    enableConsentCreateOnUpdate: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. If `true`, UpdateConsent creates the Consent if it does not already exist. If unspecified, defaults to `false`.',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. User-supplied key-value pairs used to organize consent stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \\p{Ll}\\p{Lo}{0,62}. Label values must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\\p{Ll}\\p{Lo}\\p{N}_-]{0,63}. No more than 64 labels can be associated with a given store. For more information: https://cloud.google.com/healthcare/docs/how-tos/labeling-resources',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name of the consent store, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}`. Cannot be changed after creation.',
      }),
  })
  .openapi({ description: 'Represents a consent store.', required: [] })
  .openapi('ConsentStore')

const ContextualDeidConfigSchema = z
  .object({})
  .openapi({
    description:
      'The fields that aren\'t marked `Keep` or `CleanText` in the `BASIC` profile are collected into a contextual phrase list. For fields marked `CleanText`, the process attempts to transform phrases matching these contextual entries. These contextual phrases are replaced with the token "[CTX]". This feature uses an additional InfoType during inspection.',
  })
  .openapi('ContextualDeidConfig')

const CreateMessageRequestSchema = z
  .object({ message: MessageSchema.exactOptional().openapi({ description: 'HL7v2 message.' }) })
  .openapi({ description: 'Creates a new message.', required: [] })
  .openapi('CreateMessageRequest')

const KmsWrappedCryptoKeySchema = z
  .object({
    cryptoKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The resource name of the KMS CryptoKey to use for unwrapping. For example, `projects/{project_id}/locations/{location_id}/keyRings/{keyring}/cryptoKeys/{key}`.',
      }),
    wrappedKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The wrapped data crypto key.' }),
  })
  .openapi({
    description:
      "Include to use an existing data crypto key wrapped by KMS. The wrapped key must be a 128-, 192-, or 256-bit key. The key must grant the Cloud IAM permission `cloudkms.cryptoKeyVersions.useToDecrypt` to the project's Cloud Healthcare Service Agent service account. For more information, see [Creating a wrapped key] (https://cloud.google.com/dlp/docs/create-wrapped-key).",
    required: [],
  })
  .openapi('KmsWrappedCryptoKey')

const CryptoHashConfigSchema = z
  .object({
    cryptoKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An AES 128/192/256 bit key. Causes the hash to be computed based on this key. A default key is generated for each Deidentify operation and is used when neither `crypto_key` nor `kms_wrapped` is specified. Must not be set if `kms_wrapped` is set.',
      }),
    kmsWrapped: KmsWrappedCryptoKeySchema.exactOptional().openapi({
      description: 'KMS wrapped key. Must not be set if `crypto_key` is set.',
    }),
  })
  .openapi({
    description:
      'Pseudonymization method that generates surrogates via cryptographic hashing. Uses SHA-256. Outputs a base64-encoded representation of the hashed output. For example, `L7k0BHmF1ha5U3NfGykjro4xWi1MPVQPjhMAZbSV9mM=`.',
    required: [],
  })
  .openapi('CryptoHashConfig')

const CryptoHashFieldSchema = z
  .object({})
  .openapi({
    description:
      'Replace field value with a hash of that value. Supported [types](https://www.hl7.org/fhir/datatypes.html): Code, Decimal, HumanName, Id, LanguageCode, Markdown, Oid, String, Uri, Uuid, Xhtml',
  })
  .openapi('CryptoHashField')

const DatasetSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name of the dataset, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`.',
      }),
    timeZone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The default timezone used by this dataset. Must be a either a valid IANA time zone name such as "America/New_York" or empty, which defaults to UTC. This is used for parsing times in resources, such as HL7 messages, where no explicit timezone is specified.',
      }),
  })
  .openapi({
    description:
      'A message representing a health dataset. A health dataset represents a collection of healthcare data pertaining to one or more patients. This may include multiple modalities of healthcare data, such as electronic medical records or medical imaging data.',
    required: [],
  })
  .openapi('Dataset')

const DateShiftConfigSchema = z
  .object({
    cryptoKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An AES 128/192/256 bit key. The date shift is computed based on this key and the patient ID. If the patient ID is empty for a DICOM resource, the date shift is computed based on this key and the study instance UID. If `crypto_key` is not set, then `kms_wrapped` is used to calculate the date shift. If neither is set, a default key is generated for each de-identify operation. Must not be set if `kms_wrapped` is set.',
      }),
    kmsWrapped: KmsWrappedCryptoKeySchema.exactOptional().openapi({
      description:
        'KMS wrapped key. If `kms_wrapped` is not set, then `crypto_key` is used to calculate the date shift. If neither is set, a default key is generated for each de-identify operation. Must not be set if `crypto_key` is set.',
    }),
  })
  .openapi({
    description:
      'Shift a date forward or backward in time by a random amount which is consistent for a given patient and crypto key combination.',
    required: [],
  })
  .openapi('DateShiftConfig')

const DateShiftFieldSchema = z
  .object({})
  .openapi({
    description:
      'Shift the date by a randomized number of days. See [date shifting](https://cloud.google.com/dlp/docs/concepts-date-shifting) for more information. Supported [types](https://www.hl7.org/fhir/datatypes.html): Date, DateTime',
  })
  .openapi('DateShiftField')

const TagFilterListSchema = z
  .object({
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Tags to be filtered. Tags must be DICOM Data Elements, File Meta Elements, or Directory Structuring Elements, as defined at: http://dicom.nema.org/medical/dicom/current/output/html/part06.html#table_6-1,. They may be provided by "Keyword" or "Tag". For example, "PatientID", "00100010".',
      }),
  })
  .openapi({ description: 'List of tags to be filtered.', required: [] })
  .openapi('TagFilterList')

const DicomConfigSchema = z
  .object({
    filterProfile: z
      .enum([
        'TAG_FILTER_PROFILE_UNSPECIFIED',
        'MINIMAL_KEEP_LIST_PROFILE',
        'ATTRIBUTE_CONFIDENTIALITY_BASIC_PROFILE',
        'KEEP_ALL_PROFILE',
        'DEIDENTIFY_TAG_CONTENTS',
      ])
      .exactOptional()
      .openapi({ description: 'Tag filtering profile that determines which tags to keep/remove.' }),
    keepList: TagFilterListSchema.exactOptional().openapi({
      description: 'List of tags to keep. Remove all other tags.',
    }),
    removeList: TagFilterListSchema.exactOptional().openapi({
      description: 'List of tags to remove. Keep all other tags.',
    }),
    skipIdRedaction: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, skip replacing StudyInstanceUID, SeriesInstanceUID, SOPInstanceUID, and MediaStorageSOPInstanceUID and leave them untouched. The Cloud Healthcare API regenerates these UIDs by default based on the DICOM Standard\'s reasoning: "Whilst these UIDs cannot be mapped directly to an individual out of context, given access to the original images, or to a database of the original images containing the UIDs, it would be possible to recover the individual\'s identity." http://dicom.nema.org/medical/dicom/current/output/chtml/part15/sect_E.3.9.html',
      }),
  })
  .openapi({
    description: 'Specifies the parameters needed for de-identification of DICOM stores.',
    required: [],
  })
  .openapi('DicomConfig')

const OptionsSchema = z
  .object({
    cleanDescriptors: CleanDescriptorsOptionSchema.exactOptional().openapi({
      description: 'Set Clean Descriptors Option.',
    }),
    cleanImage: ImageConfigSchema.exactOptional().openapi({
      description:
        'Apply `Action.clean_image` to [`PixelData`](http://dicom.nema.org/medical/dicom/2018e/output/chtml/part06/chapter_6.html) as configured.',
    }),
    primaryIds: z
      .enum(['PRIMARY_IDS_OPTION_UNSPECIFIED', 'KEEP', 'REGEN'])
      .exactOptional()
      .openapi({
        description:
          'Set `Action` for [`StudyInstanceUID`, `SeriesInstanceUID`, `SOPInstanceUID`, and `MediaStorageSOPInstanceUID`](http://dicom.nema.org/medical/dicom/2018e/output/chtml/part06/chapter_6.html).',
      }),
  })
  .openapi({
    description: 'Specifies additional options to apply to the base profile.',
    required: [],
  })
  .openapi('Options')

const DicomTagConfigSchema = z
  .object({
    actions: z
      .array(ActionSchema)
      .exactOptional()
      .openapi({
        description:
          'Specifies custom tag selections and `Actions` to apply to them. Overrides `options` and `profile`. Conflicting `Actions` are applied in the order given.',
      }),
    options: OptionsSchema.exactOptional().openapi({
      description: 'Specifies additional options to apply, overriding the base `profile`.',
    }),
    profileType: z
      .enum([
        'PROFILE_TYPE_UNSPECIFIED',
        'MINIMAL_KEEP_LIST_PROFILE',
        'ATTRIBUTE_CONFIDENTIALITY_BASIC_PROFILE',
        'KEEP_ALL_PROFILE',
        'DEIDENTIFY_TAG_CONTENTS',
      ])
      .exactOptional()
      .openapi({ description: 'Base profile type for handling DICOM tags.' }),
  })
  .openapi({
    description: 'Specifies the parameters needed for the de-identification of DICOM stores.',
    required: [],
  })
  .openapi('DicomTagConfig')

const FieldMetadataSchema = z
  .object({
    action: z
      .enum(['ACTION_UNSPECIFIED', 'TRANSFORM', 'INSPECT_AND_TRANSFORM', 'DO_NOT_TRANSFORM'])
      .exactOptional()
      .openapi({ description: 'Deidentify action for one field.' }),
    paths: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of paths to FHIR fields to redact. Each path is a period-separated list where each component is either a field name or FHIR type name. All types begin with an upper case letter. For example, the resource field "Patient.Address.city", which uses a string type, can be matched by "Patient.Address.String". Path also supports partial matching. For example, "Patient.Address.city" can be matched by "Address.city" (Patient omitted). Partial matching and type matching can be combined. For example, "Patient.Address.city" can be matched by "Address.String". For "choice" types (those defined in the FHIR spec with the form: field[x]), use two separate components. For example, "deceasedAge.unit" is matched by "Deceased.Age.unit". Supported types are: AdministrativeGenderCode, Base64Binary, Boolean, Code, Date, DateTime, Decimal, HumanName, Id, Instant, Integer, LanguageCode, Markdown, Oid, PositiveInt, String, UnsignedInt, Uri, Uuid, Xhtml. The sub-type for HumanName(for example HumanName.given, HumanName.family) can be omitted.',
      }),
  })
  .openapi({
    description:
      'Specifies FHIR paths to match, and how to handle de-identification of matching fields.',
    required: [],
  })
  .openapi('FieldMetadata')

const FhirConfigSchema = z
  .object({
    defaultKeepExtensions: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "The behaviour for handling FHIR extensions that aren't otherwise specified for de-identification. If true, all extensions are preserved during de-identification by default. If false or unspecified, all extensions are removed during de-identification by default.",
      }),
    fieldMetadataList: z
      .array(FieldMetadataSchema)
      .exactOptional()
      .openapi({
        description:
          'Specifies FHIR paths to match and how to transform them. Any field that is not matched by a FieldMetadata is passed through to the output dataset unmodified. All extensions will be processed according to `default_keep_extensions`. If a field can be matched by more than one FieldMetadata, the first FieldMetadata.Action is applied.',
      }),
  })
  .openapi({
    description: 'Specifies how to handle de-identification of a FHIR store.',
    required: [],
  })
  .openapi('FhirConfig')

const KeepFieldSchema = z
  .object({})
  .openapi({ description: 'Keep field unchanged.' })
  .openapi('KeepField')

const RemoveFieldSchema = z
  .object({})
  .openapi({ description: 'Remove field.' })
  .openapi('RemoveField')

const GoogleCloudHealthcareV1beta1DeidentifyFieldMetadataSchema = z
  .object({
    characterMaskField: CharacterMaskFieldSchema.exactOptional().openapi({
      description:
        "Replace the field's value with a masking character. Supported [types](https://www.hl7.org/fhir/datatypes.html): Code, Decimal, HumanName, Id, LanguageCode, Markdown, Oid, String, Uri, Uuid, Xhtml",
    }),
    cleanTextField: CleanTextFieldSchema.exactOptional().openapi({
      description:
        "Inspect the field's text and transform sensitive text. Configure using `TextConfig`. Supported [types](https://www.hl7.org/fhir/datatypes.html): Code, Date, DateTime, Decimal, HumanName, Id, LanguageCode, Markdown, Oid, String, Uri, Uuid, Xhtml",
    }),
    cryptoHashField: CryptoHashFieldSchema.exactOptional().openapi({
      description:
        'Replace field value with a hash of that value. Supported [types](https://www.hl7.org/fhir/datatypes.html): Code, Decimal, HumanName, Id, LanguageCode, Markdown, Oid, String, Uri, Uuid, Xhtml',
    }),
    dateShiftField: DateShiftFieldSchema.exactOptional().openapi({
      description:
        'Shift the date by a randomized number of days. See [date shifting](https://cloud.google.com/dlp/docs/concepts-date-shifting) for more information. Supported [types](https://www.hl7.org/fhir/datatypes.html): Date, DateTime',
    }),
    keepField: KeepFieldSchema.exactOptional().openapi({
      description: 'Keep the field unchanged.',
    }),
    paths: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of paths to FHIR fields to redact. Each path is a period-separated list where each component is either a field name or FHIR type name. All types begin with an upper case letter. For example, the resource field "Patient.Address.city", which uses a string type, can be matched by "Patient.Address.String". Path also supports partialkk matching. For example, "Patient.Address.city" can be matched by "Address.city" (Patient omitted). Partial matching and type matching can be combined, for example "Patient.Address.city" can be matched by "Address.String". For "choice" types (those defined in the FHIR spec with the form: field[x]), use two separate components. For example, "deceasedAge.unit" is matched by "Deceased.Age.unit". Supported [types](https://www.hl7.org/fhir/datatypes.html) are: AdministrativeGenderCode, Base64Binary, Boolean, Code, Date, DateTime, Decimal, HumanName, Id, Instant, Integer, LanguageCode, Markdown, Oid, PositiveInt, String, UnsignedInt, Uri, Uuid, Xhtml. The sub-type for HumanName (for example HumanName.given, HumanName.family) can be omitted.',
      }),
    removeField: RemoveFieldSchema.exactOptional().openapi({ description: 'Remove the field.' }),
  })
  .openapi({
    description:
      'Specifies the FHIR paths to match and how to handle the de-identification of matching fields.',
    required: [],
  })
  .openapi('GoogleCloudHealthcareV1beta1DeidentifyFieldMetadata')

const KeepExtensionsConfigSchema = z
  .object({})
  .openapi({
    description:
      "The behaviour for handling FHIR extensions that aren't otherwise specified for de-identification. If provided, all extensions are preserved during de-identification by default. If unspecified, all extensions are removed during de-identification by default.",
  })
  .openapi('KeepExtensionsConfig')

const GoogleCloudHealthcareV1beta1DeidentifyOptionsSchema = z
  .object({
    characterMaskConfig: CharacterMaskConfigSchema.exactOptional().openapi({
      description: 'Character mask config for `CharacterMaskField` `FieldMetadatas`.',
    }),
    contextualDeid: ContextualDeidConfigSchema.exactOptional().openapi({
      description: 'Configure contextual de-id.',
    }),
    cryptoHashConfig: CryptoHashConfigSchema.exactOptional().openapi({
      description: 'Crypo hash config for `CharacterMaskField` `FieldMetadatas`.',
    }),
    dateShiftConfig: DateShiftConfigSchema.exactOptional().openapi({
      description: 'Date shifting config for `CharacterMaskField` `FieldMetadatas`.',
    }),
    keepExtensions: KeepExtensionsConfigSchema.exactOptional().openapi({
      description: 'Configure keeping extensions by default.',
    }),
  })
  .openapi({
    description: 'Specifies additional options to apply to the base `profile`.',
    required: [],
  })
  .openapi('GoogleCloudHealthcareV1beta1DeidentifyOptions')

const FhirFieldConfigSchema = z
  .object({
    fieldMetadataList: z
      .array(GoogleCloudHealthcareV1beta1DeidentifyFieldMetadataSchema)
      .exactOptional()
      .openapi({
        description:
          'Specifies FHIR paths to match and how to transform them. Any field that is not matched by a `FieldMetadata` is passed through to the output dataset unmodified. All extensions will be processed according to `keep_extensions`. If a field can be matched by more than one `FieldMetadata`, the first `FieldMetadata.Action` is applied. Overrides `options` and `profile`.',
      }),
    options: GoogleCloudHealthcareV1beta1DeidentifyOptionsSchema.exactOptional().openapi({
      description: 'Specifies additional options, overriding the base `profile`.',
    }),
    profileType: z
      .enum(['PROFILE_TYPE_UNSPECIFIED', 'KEEP_ALL', 'BASIC', 'CLEAN_ALL'])
      .exactOptional()
      .openapi({ description: 'Base profile type for handling FHIR fields.' }),
  })
  .openapi({
    description: 'Specifies how to handle the de-identification of a FHIR store.',
    required: [],
  })
  .openapi('FhirFieldConfig')

const FhirOutputSchema = z
  .object({
    fhirStore: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Name of the output FHIR store, which must already exist. You must grant the healthcare.fhirResources.update permission on the destination store to your project's **Cloud Healthcare Service Agent** [service account](https://cloud.google.com/healthcare/docs/how-tos/permissions-healthcare-api-gcp-products#the_cloud_healthcare_service_agent). The destination store must set `enable_update_create` to true. The destination store must use FHIR version R4. Writing these resources will consume FHIR operations quota from the project containing the source data. De-identify operation metadata is only generated for DICOM de-identification operations.",
      }),
  })
  .openapi({ description: 'Details about the FHIR store to write the output to.', required: [] })
  .openapi('FhirOutput')

const DeidentifyOperationMetadataSchema = z
  .object({
    fhirOutput: FhirOutputSchema.exactOptional().openapi({
      description: 'Details about the FHIR store to write the output to.',
    }),
  })
  .openapi({
    description: 'Details about the work the de-identify operation performed.',
    required: [],
  })
  .openapi('DeidentifyOperationMetadata')

const RedactConfigSchema = z
  .object({})
  .openapi({
    description:
      'Define how to redact sensitive values. Default behaviour is erase. For example, "My name is Jane." becomes "My name is ."',
  })
  .openapi('RedactConfig')

const ReplaceWithInfoTypeConfigSchema = z
  .object({})
  .openapi({
    description:
      'When using the INSPECT_AND_TRANSFORM action, each match is replaced with the name of the info_type. For example, "My name is Jane" becomes "My name is [PERSON_NAME]." The TRANSFORM action is equivalent to redacting.',
  })
  .openapi('ReplaceWithInfoTypeConfig')

const InfoTypeTransformationSchema = z
  .object({
    characterMaskConfig: CharacterMaskConfigSchema.exactOptional().openapi({
      description: 'Config for character mask.',
    }),
    cryptoHashConfig: CryptoHashConfigSchema.exactOptional().openapi({
      description: 'Config for crypto hash.',
    }),
    dateShiftConfig: DateShiftConfigSchema.exactOptional().openapi({
      description: 'Config for date shift.',
    }),
    infoTypes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          '`InfoTypes` to apply this transformation to. If this is not specified, this transformation becomes the default transformation, and is used for any `info_type` that is not specified in another transformation.',
      }),
    redactConfig: RedactConfigSchema.exactOptional().openapi({
      description: 'Config for text redaction.',
    }),
    replaceWithInfoTypeConfig: ReplaceWithInfoTypeConfigSchema.exactOptional().openapi({
      description: 'Config for replace with InfoType.',
    }),
  })
  .openapi({
    description: 'A transformation to apply to text that is identified as a specific info_type.',
    required: [],
  })
  .openapi('InfoTypeTransformation')

const TextConfigSchema = z
  .object({
    additionalTransformations: z
      .array(InfoTypeTransformationSchema)
      .exactOptional()
      .openapi({
        description:
          'Additional transformations to apply to the detected data, overriding `profile`.',
      }),
    excludeInfoTypes: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'InfoTypes to skip transforming, overriding `profile`.' }),
    profileType: z
      .enum(['PROFILE_TYPE_UNSPECIFIED', 'EMPTY', 'BASIC'])
      .exactOptional()
      .openapi({ description: 'Base profile type for text transformation.' }),
    transformations: z
      .array(InfoTypeTransformationSchema)
      .exactOptional()
      .openapi({
        description:
          'The transformations to apply to the detected data. Deprecated. Use `additional_transformations` instead.',
      }),
  })
  .openapi({ description: 'Configures how to transform sensitive text `InfoTypes`.', required: [] })
  .openapi('TextConfig')

const DeidentifyConfigSchema = z
  .object({
    annotation: AnnotationConfigSchema.exactOptional().openapi({
      description:
        'Configures how annotations, meaning that the location and infoType of sensitive information findings, are created during de-identification. If unspecified, no annotations are created.',
    }),
    dicom: DicomConfigSchema.exactOptional().openapi({
      description:
        'Configures de-id of application/DICOM content. Deprecated. Use `dicom_tag_config` instead.',
    }),
    dicomTagConfig: DicomTagConfigSchema.exactOptional().openapi({
      description: 'Configures de-id of application/DICOM content.',
    }),
    fhir: FhirConfigSchema.exactOptional().openapi({
      description:
        'Configures de-id of application/FHIR content. Deprecated. Use `fhir_field_config` instead.',
    }),
    fhirFieldConfig: FhirFieldConfigSchema.exactOptional().openapi({
      description: 'Configures de-id of application/FHIR content.',
    }),
    image: ImageConfigSchema.exactOptional().openapi({
      description:
        'Configures the de-identification of image pixels in the source_dataset. Deprecated. Use `dicom_tag_config.options.clean_image` instead.',
    }),
    operationMetadata: DeidentifyOperationMetadataSchema.exactOptional().openapi({
      description: 'Details about the work the de-identify operation performed.',
    }),
    text: TextConfigSchema.exactOptional().openapi({
      description:
        'Configures de-identification of text wherever it is found in the source_dataset.',
    }),
  })
  .openapi({
    description:
      'Configures de-id options specific to different types of content. Each submessage customizes the handling of an https://tools.ietf.org/html/rfc6838 media type or subtype. Configs are applied in a nested manner at runtime.',
    required: [],
  })
  .openapi('DeidentifyConfig')

const DeidentifiedStoreDestinationSchema = z
  .object({
    config: DeidentifyConfigSchema.exactOptional().openapi({
      description:
        'The configuration to use when de-identifying resources that are added to this store.',
    }),
    store: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The full resource name of a Cloud Healthcare FHIR store, for example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.',
      }),
  })
  .openapi({
    description: 'Contains configuration for streaming de-identified FHIR export.',
    required: [],
  })
  .openapi('DeidentifiedStoreDestination')

const DeidentifyDatasetRequestSchema = z
  .object({
    config: DeidentifyConfigSchema.exactOptional().openapi({
      description:
        'Deidentify configuration. Only one of `config` and `gcs_config_uri` can be specified.',
    }),
    destinationDataset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the dataset resource to create and write the redacted data to. * The destination dataset must not exist. * The destination dataset must be in the same location as the source dataset. De-identifying data across multiple locations is not supported.',
      }),
    gcsConfigUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Cloud Storage location to read the JSON cloud.healthcare.deidentify.DeidentifyConfig from, overriding the default config. Must be of the form `gs://{bucket_id}/path/to/object`. The Cloud Storage location must grant the Cloud IAM role `roles/storage.objectViewer` to the project's Cloud Healthcare Service Agent service account. Only one of `config` and `gcs_config_uri` can be specified.",
      }),
  })
  .openapi({
    description: 'Redacts identifying information from the specified dataset.',
    required: [],
  })
  .openapi('DeidentifyDatasetRequest')

const DicomFilterConfigSchema = z
  .object({
    resourcePathsGcsUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Cloud Storage location of the filter configuration file. The `gcs_uri` must be in the format `gs://bucket/path/to/object`. The filter configuration file must contain a list of resource paths separated by newline characters (\\n or \\r\\n). Each resource path must be in the format "/studies/{studyUID}[/series/{seriesUID}[/instances/{instanceUID}]]" The Cloud Healthcare API service account must have the `roles/storage.objectViewer` Cloud IAM role for this Cloud Storage location.',
      }),
  })
  .openapi({ description: 'Specifies the filter configuration for DICOM resources.', required: [] })
  .openapi('DicomFilterConfig')

const DeidentifyDicomStoreRequestSchema = z
  .object({
    config: DeidentifyConfigSchema.exactOptional().openapi({
      description:
        'Deidentify configuration. Only one of `config` and `gcs_config_uri` can be specified.',
    }),
    destinationStore: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the DICOM store to create and write the redacted data to. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`. * The destination dataset must exist. * The source dataset and destination dataset must both reside in the same location. De-identifying data across multiple locations is not supported. * The destination DICOM store must not exist. * The caller must have the necessary permissions to create the destination DICOM store.',
      }),
    filterConfig: DicomFilterConfigSchema.exactOptional().openapi({
      description: 'Filter configuration.',
    }),
    gcsConfigUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Cloud Storage location to read the JSON cloud.healthcare.deidentify.DeidentifyConfig from, overriding the default config. Must be of the form `gs://{bucket_id}/path/to/object`. The Cloud Storage location must grant the Cloud IAM role `roles/storage.objectViewer` to the project's Cloud Healthcare Service Agent service account. Only one of `config` and `gcs_config_uri` can be specified.",
      }),
  })
  .openapi({
    description: 'Creates a new DICOM store with sensitive information de-identified.',
    required: [],
  })
  .openapi('DeidentifyDicomStoreRequest')

const ResourcesSchema = z
  .object({
    resources: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of resources IDs. For example, "Patient/1234".' }),
  })
  .openapi({ description: 'A list of FHIR resources.', required: [] })
  .openapi('Resources')

const FhirFilterSchema = z
  .object({
    resources: ResourcesSchema.exactOptional().openapi({
      description:
        'List of resources to include in the output. If this list is empty or not specified, all resources are included in the output.',
    }),
  })
  .openapi({ description: 'Filter configuration.', required: [] })
  .openapi('FhirFilter')

const DeidentifyFhirStoreRequestSchema = z
  .object({
    config: DeidentifyConfigSchema.exactOptional().openapi({
      description:
        'Deidentify configuration. Only one of `config` and `gcs_config_uri` can be specified.',
    }),
    destinationStore: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the FHIR store to create and write the redacted data to. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`. * The destination dataset must exist. * The source dataset and destination dataset must both reside in the same location. De-identifying data across multiple locations is not supported. * The destination FHIR store must exist. * The caller must have the healthcare.fhirResources.update permission to write to the destination FHIR store.',
      }),
    gcsConfigUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Cloud Storage location to read the JSON cloud.healthcare.deidentify.DeidentifyConfig from, overriding the default config. Must be of the form `gs://{bucket_id}/path/to/object`. The Cloud Storage location must grant the Cloud IAM role `roles/storage.objectViewer` to the project's Cloud Healthcare Service Agent service account. Only one of `config` and `gcs_config_uri` can be specified.",
      }),
    resourceFilter: FhirFilterSchema.exactOptional().openapi({
      description:
        'A filter specifying the resources to include in the output. If not specified, all resources are included in the output.',
    }),
    skipModifiedResources: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, skips resources that are created or modified after the de-identify operation is created.',
      }),
  })
  .openapi({
    description: 'Creates a new FHIR store with sensitive information de-identified.',
    required: [],
  })
  .openapi('DeidentifyFhirStoreRequest')

const DeidentifySummarySchema = z
  .object({})
  .openapi({ description: 'Contains a detailed summary of the Deidentify operation.' })
  .openapi('DeidentifySummary')

const NotificationConfigSchema = z
  .object({
    pubsubTopic: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The [Pub/Sub](https://cloud.google.com/pubsub/docs/) topic that notifications of changes are published on. Supplied by the client. PubsubMessage.Data contains the resource name. PubsubMessage.MessageId is the ID of this message. It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message was published. Notifications are only sent if the topic is non-empty. [Topic names](https://cloud.google.com/pubsub/docs/overview#names) must be scoped to a project. Cloud Healthcare API service account must have publisher permissions on the given Pub/Sub topic. Not having adequate permissions causes the calls that send notifications to fail. If a notification can't be published to Pub/Sub, errors are logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)). If the number of errors exceeds a certain rate, some aren't submitted. Note that not all operations trigger notifications, see [Configuring Pub/Sub notifications](https://cloud.google.com/healthcare/docs/how-tos/pubsub) for specific details.",
      }),
    sendForBulkImport: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether or not to send Pub/Sub notifications on bulk import. Only supported for DICOM imports.',
      }),
  })
  .openapi({
    description: 'Specifies where to send notifications upon changes to a data store.',
    required: [],
  })
  .openapi('NotificationConfig')

const GoogleCloudHealthcareV1beta1DicomBigQueryDestinationSchema = z
  .object({
    force: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Use `write_disposition` instead. If `write_disposition` is specified, this parameter is ignored. force=false is equivalent to write_disposition=WRITE_EMPTY and force=true is equivalent to write_disposition=WRITE_TRUNCATE.',
      }),
    tableUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'BigQuery URI to a table, up to 2000 characters long, in the format `bq://projectId.bqDatasetId.tableId`',
      }),
    writeDisposition: z
      .enum(['WRITE_DISPOSITION_UNSPECIFIED', 'WRITE_EMPTY', 'WRITE_TRUNCATE', 'WRITE_APPEND'])
      .exactOptional()
      .openapi({
        description:
          'Determines whether the existing table in the destination is to be overwritten or appended to. If a write_disposition is specified, the `force` parameter is ignored.',
      }),
  })
  .openapi({ description: 'The BigQuery table where the server writes output.', required: [] })
  .openapi('GoogleCloudHealthcareV1beta1DicomBigQueryDestination')

const GoogleCloudHealthcareV1beta1DicomStreamConfigSchema = z
  .object({
    bigqueryDestination:
      GoogleCloudHealthcareV1beta1DicomBigQueryDestinationSchema.exactOptional().openapi({
        description:
          "Results are appended to this table. The server creates a new table in the given BigQuery dataset if the specified table does not exist. To enable the Cloud Healthcare API to write to your BigQuery table, you must give the Cloud Healthcare API service account the bigquery.dataEditor role. The service account is: `service-{PROJECT_NUMBER}@gcp-sa-healthcare.iam.gserviceaccount.com`. The PROJECT_NUMBER identifies the project that the DICOM store resides in. To get the project number, go to the Cloud Console Dashboard. It is recommended to not have a custom schema in the destination table which could conflict with the schema created by the Cloud Healthcare API. Instance deletions are not applied to the destination table. The destination's table schema will be automatically updated in case a new instance's data is incompatible with the current schema. The schema should not be updated manually as this can cause incompatibilies that cannot be resolved automatically. One resolution in this case is to delete the incompatible table and let the server recreate one, though the newly created table only contains data after the table recreation. BigQuery imposes a 1 MB limit on streaming insert row size, therefore any instance that generates more than 1 MB of BigQuery data will not be streamed. If an instance cannot be streamed to BigQuery, errors will be logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)).",
      }),
  })
  .openapi({
    description: 'StreamConfig specifies configuration for a streaming DICOM export.',
    required: [],
  })
  .openapi('GoogleCloudHealthcareV1beta1DicomStreamConfig')

const DicomStoreSchema = z
  .object({
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'User-supplied key-value pairs used to organize DICOM stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \\p{Ll}\\p{Lo}{0,62} Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\\p{Ll}\\p{Lo}\\p{N}_-]{0,63} No more than 64 labels can be associated with a given store.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name of the DICOM store, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.',
      }),
    notificationConfig: NotificationConfigSchema.exactOptional().openapi({
      description: 'Notification destination for new DICOM instances. Supplied by the client.',
    }),
    streamConfigs: z
      .array(GoogleCloudHealthcareV1beta1DicomStreamConfigSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of streaming configs used to configure the destination of streaming exports for every DICOM instance insertion in this DICOM store. After a new config is added to `stream_configs`, DICOM instance insertions are streamed to the new destination. When a config is removed from `stream_configs`, the server stops streaming to that destination. Each config must contain a unique destination.',
      }),
  })
  .openapi({ description: 'Represents a DICOM store.', required: [] })
  .openapi('DicomStore')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationSchema = z
  .object({
    force: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Use `write_disposition` instead. If `write_disposition` is specified, this parameter is ignored. force=false is equivalent to write_disposition=WRITE_EMPTY and force=true is equivalent to write_disposition=WRITE_TRUNCATE.',
      }),
    schemaType: z
      .enum(['SCHEMA_TYPE_UNSPECIFIED', 'SIMPLE'])
      .exactOptional()
      .openapi({ description: 'Specifies the schema format to export.' }),
    tableUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'BigQuery URI to a table, up to 2000 characters long, must be of the form bq://projectId.bqDatasetId.tableId.',
      }),
    writeDisposition: z
      .enum(['WRITE_DISPOSITION_UNSPECIFIED', 'WRITE_EMPTY', 'WRITE_TRUNCATE', 'WRITE_APPEND'])
      .exactOptional()
      .openapi({
        description:
          'Determines if existing data in the destination dataset is overwritten, appended to, or not written if the tables contain data. If a write_disposition is specified, the `force` parameter is ignored.',
      }),
  })
  .openapi({ description: 'The BigQuery table for export.', required: [] })
  .openapi('GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination')

const FilterListSchema = z
  .object({
    infoTypes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'These infoTypes are based on after the `eval_info_type_mapping` and `golden_info_type_mapping`.',
      }),
  })
  .openapi({ description: 'List of infoTypes to be filtered.', required: [] })
  .openapi('FilterList')

const InfoTypeConfigSchema = z
  .object({
    evaluateList: FilterListSchema.exactOptional(),
    ignoreList: FilterListSchema.exactOptional(),
    strictMatching: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If `TRUE`, infoTypes described by `filter` are used for evaluation. Otherwise, infoTypes are not considered for evaluation. For example: * Annotated text: "Toronto is a location" * Finding 1: `{"infoType": "PERSON", "quote": "Toronto", "start": 0, "end": 7}` * Finding 2: `{"infoType": "CITY", "quote": "Toronto", "start": 0, "end": 7}` * Finding 3: `{}` * Ground truth: `{"infoType": "LOCATION", "quote": "Toronto", "start": 0, "end": 7}` When `strict_matching` is `TRUE`: * Finding 1: 1 false positive * Finding 2: 1 false positive * Finding 3: 1 false negative When `strict_matching` is `FALSE`: * Finding 1: 1 true positive * Finding 2: 1 true positive * Finding 3: 1 false negative',
      }),
  })
  .openapi({
    description:
      'Specifies how to use infoTypes for evaluation. For example, a user might only want to evaluate `PERSON`, `LOCATION`, and `AGE`.',
    required: [],
  })
  .openapi('InfoTypeConfig')

const EvaluateAnnotationStoreRequestSchema = z
  .object({
    bigqueryDestination:
      GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationSchema.exactOptional().openapi({
        description:
          'The BigQuery table where the server writes the output. BigQueryDestination requires the `roles/bigquery.dataEditor` and `roles/bigquery.jobUser` Cloud IAM roles.',
      }),
    evalInfoTypeMapping: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. InfoType mapping for `eval_store`. Different resources can map to the same infoType. For example, `PERSON_NAME`, `PERSON`, `NAME`, and `HUMAN` are different. To map all of these into a single infoType (such as `PERSON_NAME`), specify the following mapping: ``` info_type_mapping["PERSON"] = "PERSON_NAME" info_type_mapping["NAME"] = "PERSON_NAME" info_type_mapping["HUMAN"] = "PERSON_NAME" ``` Unmentioned infoTypes, such as `DATE`, are treated as identity mapping. For example: ``` info_type_mapping["DATE"] = "DATE" ``` InfoTypes are case-insensitive.',
      }),
    goldenInfoTypeMapping: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. Similar to `eval_info_type_mapping`, infoType mapping for `golden_store`.',
      }),
    goldenStore: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Annotation store to use as ground truth, in the format of `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/annotationStores/{annotation_store_id}`.',
      }),
    infoTypeConfig: InfoTypeConfigSchema.exactOptional(),
  })
  .openapi({
    description:
      'Request to evaluate an Annotation store against a ground truth [Annotation store].',
    required: [],
  })
  .openapi('EvaluateAnnotationStoreRequest')

const EvaluateAnnotationStoreResponseSchema = z
  .object({})
  .openapi({
    description:
      'Response for successful Annotation store evaluation operations. This structure is included in the response upon operation completion.',
  })
  .openapi('EvaluateAnnotationStoreResponse')

const EvaluateUserConsentsRequestSchema = z
  .object({
    consentList: ConsentListSchema.exactOptional().openapi({
      description:
        'Optional. Specific Consents to evaluate the access request against. These Consents must have the same `user_id` as the User data mappings being evalauted, must exist in the current `consent_store`, and must have a `state` of either `ACTIVE` or `DRAFT`. A maximum of 100 Consents can be provided here. If unspecified, all `ACTIVE` unexpired Consents in the current `consent_store` will be evaluated.',
    }),
    pageSize: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Limit on the number of User data mappings to return in a single response. If not specified, 100 is used. May not be larger than 1000.',
      }),
    pageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Token to retrieve the next page of results, or empty to get the first page.',
      }),
    requestAttributes: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. The values of request attributes associated with this access request.',
      }),
    resourceAttributes: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The values of resource attributes associated with the resources being requested. If no values are specified, then all resources are queried.',
      }),
    responseView: z
      .enum(['RESPONSE_VIEW_UNSPECIFIED', 'BASIC', 'FULL'])
      .exactOptional()
      .openapi({
        description:
          'Optional. The view for EvaluateUserConsentsResponse. If unspecified, defaults to `BASIC` and returns `consented` as `TRUE` or `FALSE`.',
      }),
    userId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. User ID to evaluate consents for.' }),
  })
  .openapi({
    description:
      "Evaluate a user's Consents for all matching User data mappings. Note: User data mappings are indexed asynchronously, causing slight delays between the time mappings are created or updated and when they are included in EvaluateUserConsents results.",
    required: [],
  })
  .openapi('EvaluateUserConsentsRequest')

const ResultSchema = z
  .object({
    consentDetails: z
      .record(z.string(), ConsentEvaluationSchema)
      .exactOptional()
      .openapi({
        description: 'The resource names of all evaluated Consents mapped to their evaluation.',
      }),
    consented: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the resource is consented for the given use.' }),
    dataId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the evaluated resource.' }),
  })
  .openapi({ description: 'The consent evaluation result for a single `data_id`.', required: [] })
  .openapi('Result')

const EvaluateUserConsentsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list. This token is valid for 72 hours after it is created.',
      }),
    results: z
      .array(ResultSchema)
      .exactOptional()
      .openapi({ description: 'The consent evaluation result for each `data_id`.' }),
  })
  .openapi({ required: [] })
  .openapi('EvaluateUserConsentsResponse')

const GoogleCloudHealthcareV1beta1AnnotationGcsDestinationSchema = z
  .object({
    uriPrefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Cloud Storage destination to export to. URI for a Cloud Storage directory where the server writes result files, in the format `gs://{bucket-id}/{path/to/destination/dir}`. If there is no trailing slash, the service appends one when composing the object path. The user is responsible for creating the Cloud Storage bucket referenced in `uri_prefix`.',
      }),
  })
  .openapi({ description: 'The Cloud Storage location for export.', required: [] })
  .openapi('GoogleCloudHealthcareV1beta1AnnotationGcsDestination')

const ExportAnnotationsRequestSchema = z
  .object({
    bigqueryDestination:
      GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationSchema.exactOptional().openapi({
        description:
          'The BigQuery output destination, which requires two IAM roles: `roles/bigquery.dataEditor` and `roles/bigquery.jobUser`.',
      }),
    gcsDestination:
      GoogleCloudHealthcareV1beta1AnnotationGcsDestinationSchema.exactOptional().openapi({
        description:
          'The Cloud Storage destination, which requires the `roles/storage.objectAdmin` Cloud IAM role.',
      }),
  })
  .openapi({
    description:
      'Request to export Annotations. The export operation is not atomic. If a failure occurs, any annotations already exported are not removed.',
    required: [],
  })
  .openapi('ExportAnnotationsRequest')

const ExportAnnotationsResponseSchema = z
  .object({})
  .openapi({
    description:
      'Response for successful annotation export operations. This structure is included in response upon operation completion.',
  })
  .openapi('ExportAnnotationsResponse')

const GoogleCloudHealthcareV1beta1DicomGcsDestinationSchema = z
  .object({
    mimeType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'MIME types supported by DICOM spec. Each file is written in the following format: `.../{study_id}/{series_id}/{instance_id}[/{frame_number}].{extension}` The frame_number component exists only for multi-frame instances. Supported MIME types are consistent with supported formats in DICOMweb: https://cloud.google.com/healthcare/docs/dicom#retrieve_transaction. Specifically, the following are supported: - application/dicom; transfer-syntax=1.2.840.10008.1.2.1 (uncompressed DICOM) - application/dicom; transfer-syntax=1.2.840.10008.1.2.4.50 (DICOM with embedded JPEG Baseline) - application/dicom; transfer-syntax=1.2.840.10008.1.2.4.90 (DICOM with embedded JPEG 2000 Lossless Only) - application/dicom; transfer-syntax=1.2.840.10008.1.2.4.91 (DICOM with embedded JPEG 2000)h - application/dicom; transfer-syntax=* (DICOM with no transcoding) - application/octet-stream; transfer-syntax=1.2.840.10008.1.2.1 (raw uncompressed PixelData) - application/octet-stream; transfer-syntax=* (raw PixelData in whatever format it was uploaded in) - image/jpeg; transfer-syntax=1.2.840.10008.1.2.4.50 (Consumer JPEG) - image/png The following extensions are used for output files: - application/dicom -> .dcm - image/jpeg -> .jpg - image/png -> .png - application/octet-stream -> no extension If unspecified, the instances are exported in the original DICOM format they were uploaded in.',
      }),
    uriPrefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Cloud Storage destination to export to. URI for a Cloud Storage directory where the server writes the result files, in the format `gs://{bucket-id}/{path/to/destination/dir}`). If there is no trailing slash, the service appends one when composing the object path. The user is responsible for creating the Cloud Storage bucket referenced in `uri_prefix`.',
      }),
  })
  .openapi({
    description:
      'The Cloud Storage location where the server writes the output and the export configuration.',
    required: [],
  })
  .openapi('GoogleCloudHealthcareV1beta1DicomGcsDestination')

const ExportDicomDataRequestSchema = z
  .object({
    bigqueryDestination:
      GoogleCloudHealthcareV1beta1DicomBigQueryDestinationSchema.exactOptional().openapi({
        description:
          "The BigQuery output destination. You can only export to a BigQuery dataset that's in the same project as the DICOM store you're exporting from. The Cloud Healthcare Service Agent requires two IAM roles on the BigQuery location: `roles/bigquery.dataEditor` and `roles/bigquery.jobUser`.",
      }),
    filterConfig: DicomFilterConfigSchema.exactOptional().openapi({
      description: 'Specifies the filter configuration.',
    }),
    gcsDestination: GoogleCloudHealthcareV1beta1DicomGcsDestinationSchema.exactOptional().openapi({
      description:
        'The Cloud Storage output destination. The Cloud Healthcare Service Agent requires the `roles/storage.objectAdmin` Cloud IAM roles on the Cloud Storage location.',
    }),
  })
  .openapi({
    description:
      'Exports data from the specified DICOM store. If a given resource, such as a DICOM object with the same SOPInstance UID, already exists in the output, it is overwritten with the version in the source dataset. Exported DICOM data persists when the DICOM store from which it was exported is deleted.',
    required: [],
  })
  .openapi('ExportDicomDataRequest')

const ExportDicomDataResponseSchema = z
  .object({})
  .openapi({
    description: 'Returns additional information in regards to a completed DICOM store export.',
  })
  .openapi('ExportDicomDataResponse')

const GcsDestinationSchema = z
  .object({
    contentStructure: z
      .enum(['CONTENT_STRUCTURE_UNSPECIFIED', 'MESSAGE_JSON'])
      .exactOptional()
      .openapi({ description: 'The format of the exported HL7v2 message files.' }),
    messageView: z
      .enum([
        'MESSAGE_VIEW_UNSPECIFIED',
        'RAW_ONLY',
        'PARSED_ONLY',
        'FULL',
        'SCHEMATIZED_ONLY',
        'BASIC',
      ])
      .exactOptional()
      .openapi({
        description:
          'Specifies the parts of the Message resource to include in the export. If not specified, FULL is used.',
      }),
    uriPrefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URI of an existing Cloud Storage directory where the server writes result files, in the format `gs://{bucket-id}/{path/to/destination/dir}`. If there is no trailing slash, the service appends one when composing the object path.',
      }),
  })
  .openapi({
    description:
      'The Cloud Storage output destination. The Cloud Healthcare Service Agent requires the `roles/storage.objectAdmin` Cloud IAM roles on the Cloud Storage location.',
    required: [],
  })
  .openapi('GcsDestination')

const ExportMessagesRequestSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The end of the range in `send_time` (MSH.7, https://www.hl7.org/documentcenter/public_temp_2E58C1F9-1C23-BA17-0C6126475344DA9D/wg/conf/HL7MSH.htm) to process. If not specified, the time when the export is scheduled is used. This value has to come after the `start_time` defined below. Only messages whose `send_time` lies in the range `start_time` (inclusive) to `end_time` (exclusive) are exported.',
      }),
    gcsDestination: GcsDestinationSchema.exactOptional().openapi({
      description: 'Exports to a Cloud Storage destination.',
    }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The start of the range in `send_time` (MSH.7, https://www.hl7.org/documentcenter/public_temp_2E58C1F9-1C23-BA17-0C6126475344DA9D/wg/conf/HL7MSH.htm) to process. If not specified, the UNIX epoch (1970-01-01T00:00:00Z) is used. This value has to come before the `end_time` defined below. Only messages whose `send_time` lies in the range `start_time` (inclusive) to `end_time` (exclusive) are exported.',
      }),
  })
  .openapi({ description: 'Request to schedule an export.', required: [] })
  .openapi('ExportMessagesRequest')

const ExportMessagesResponseSchema = z
  .object({})
  .openapi({
    description:
      'Final response for the export operation. This structure is included in the response to describe the detailed outcome.',
  })
  .openapi('ExportMessagesResponse')

const TimePartitioningSchema = z
  .object({
    expirationMs: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Number of milliseconds for which to keep the storage for a partition.',
      }),
    type: z
      .enum(['PARTITION_TYPE_UNSPECIFIED', 'HOUR', 'DAY', 'MONTH', 'YEAR'])
      .exactOptional()
      .openapi({ description: 'Type of partitioning.' }),
  })
  .openapi({
    description: 'Configuration for FHIR BigQuery time-partitioned tables.',
    required: [],
  })
  .openapi('TimePartitioning')

const SchemaConfigSchema = z
  .object({
    lastUpdatedPartitionConfig: TimePartitioningSchema.exactOptional().openapi({
      description:
        "The configuration for exported BigQuery tables to be partitioned by FHIR resource's last updated time column.",
    }),
    recursiveStructureDepth: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The depth for all recursive structures in the output analytics schema. For example, `concept` in the CodeSystem resource is a recursive structure; when the depth is 2, the CodeSystem table will have a column called `concept.concept` but not `concept.concept.concept`. If not specified or set to 0, the server will use the default value 2. The maximum depth allowed is 5.',
      }),
    schemaType: z
      .enum(['SCHEMA_TYPE_UNSPECIFIED', 'LOSSLESS', 'ANALYTICS', 'ANALYTICS_V2'])
      .exactOptional()
      .openapi({ description: 'Specifies the output schema type. Schema type is required.' }),
  })
  .openapi({
    description:
      'Configuration for the FHIR BigQuery schema. Determines how the server generates the schema.',
    required: [],
  })
  .openapi('SchemaConfig')

const GoogleCloudHealthcareV1beta1FhirBigQueryDestinationSchema = z
  .object({
    datasetUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'BigQuery URI to an existing dataset, up to 2000 characters long, in the format `bq://projectId.bqDatasetId`.',
      }),
    force: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Use `write_disposition` instead. If `write_disposition` is specified, this parameter is ignored. force=false is equivalent to write_disposition=WRITE_EMPTY and force=true is equivalent to write_disposition=WRITE_TRUNCATE.',
      }),
    schemaConfig: SchemaConfigSchema.exactOptional().openapi({
      description: 'The configuration for the exported BigQuery schema.',
    }),
    writeDisposition: z
      .enum(['WRITE_DISPOSITION_UNSPECIFIED', 'WRITE_EMPTY', 'WRITE_TRUNCATE', 'WRITE_APPEND'])
      .exactOptional()
      .openapi({
        description:
          'Determines if existing data in the destination dataset is overwritten, appended to, or not written if the tables contain data. If a write_disposition is specified, the `force` parameter is ignored.',
      }),
  })
  .openapi({ description: 'The configuration for exporting to BigQuery.', required: [] })
  .openapi('GoogleCloudHealthcareV1beta1FhirBigQueryDestination')

const GoogleCloudHealthcareV1beta1FhirGcsDestinationSchema = z
  .object({
    uriPrefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URI for a Cloud Storage directory where result files should be written (in the format `gs://{bucket-id}/{path/to/destination/dir}`). If there is no trailing slash, the service appends one when composing the object path. The Cloud Storage bucket referenced in `uri_prefix` must exist or an error occurs.',
      }),
  })
  .openapi({ description: 'The configuration for exporting to Cloud Storage.', required: [] })
  .openapi('GoogleCloudHealthcareV1beta1FhirGcsDestination')

const ExportResourcesRequestSchema = z
  .object({
    _since: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If provided, only resources updated after this time are exported. The time uses the format YYYY-MM-DDThh:mm:ss.sss+zz:zz. For example, `2015-02-07T13:28:17.239+02:00` or `2017-01-01T00:00:00Z`. The time must be specified to the second and include a time zone.',
      }),
    _type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'String of comma-delimited FHIR resource types. If provided, only resources of the specified resource type(s) are exported.',
      }),
    bigqueryDestination:
      GoogleCloudHealthcareV1beta1FhirBigQueryDestinationSchema.exactOptional().openapi({
        description:
          'The BigQuery output destination. The Cloud Healthcare Service Agent requires two IAM roles on the BigQuery location: `roles/bigquery.dataEditor` and `roles/bigquery.jobUser`. The output is one BigQuery table per resource type. Unlike when setting `BigQueryDestination` for `StreamConfig`, `ExportResources` does not create BigQuery views.',
      }),
    gcsDestination: GoogleCloudHealthcareV1beta1FhirGcsDestinationSchema.exactOptional().openapi({
      description:
        'The Cloud Storage output destination. The Cloud Healthcare Service Agent requires the `roles/storage.objectAdmin` Cloud IAM roles on the Cloud Storage location. The exported outputs are organized by FHIR resource types. The server creates one object per resource type. Each object contains newline delimited JSON, and each line is a FHIR resource.',
    }),
  })
  .openapi({ description: 'Request to export resources.', required: [] })
  .openapi('ExportResourcesRequest')

const FhirNotificationConfigSchema = z
  .object({
    pubsubTopic: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The [Pub/Sub](https://cloud.google.com/pubsub/docs/) topic that notifications of changes are published on. Supplied by the client. The notification is a `PubsubMessage` with the following fields: * `PubsubMessage.Data` contains the resource name. * `PubsubMessage.MessageId` is the ID of this notification. It is guaranteed to be unique within the topic. * `PubsubMessage.PublishTime` is the time when the message was published. Note that notifications are only sent if the topic is non-empty. [Topic names](https://cloud.google.com/pubsub/docs/overview#names) must be scoped to a project. The Cloud Healthcare API service account, service-@gcp-sa-healthcare.iam.gserviceaccount.com, must have publisher permissions on the given Pub/Sub topic. Not having adequate permissions causes the calls that send notifications to fail (https://cloud.google.com/healthcare-api/docs/permissions-healthcare-api-gcp-products#dicom_fhir_and_hl7v2_store_cloud_pubsub_permissions). If a notification can't be published to Pub/Sub, errors are logged to Cloud Logging. For more information, see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare-api/docs/how-tos/logging).",
      }),
    sendFullResource: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to send full FHIR resource to this Pub/Sub topic for Create and Update operation. Note that setting this to true does not guarantee that all resources will be sent in the format of full FHIR resource. When a resource change is too large or during heavy traffic, only the resource name will be sent. Clients should always check the "payloadType" label from a Pub/Sub message to determine whether it needs to fetch the full resource as a separate operation.',
      }),
  })
  .openapi({ description: 'Contains the configuration for FHIR notifications.', required: [] })
  .openapi('FhirNotificationConfig')

const SearchParameterSchema = z
  .object({
    canonicalUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The canonical url of the search parameter resource.' }),
    parameter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The versioned name of the search parameter resource. The format is projects/{project-id}/locations/{location}/datasets/{dataset-id}/fhirStores/{fhirStore-id}/fhir/SearchParameter/{resource-id}/_history/{version-id} For fhir stores with disable_resource_versioning=true, the format is projects/{project-id}/locations/{location}/datasets/{dataset-id}/fhirStores/{fhirStore-id}/fhir/SearchParameter/{resource-id}/',
      }),
  })
  .openapi({
    description: 'Contains the versioned name and the URL for one SearchParameter.',
    required: [],
  })
  .openapi('SearchParameter')

const SearchConfigSchema = z
  .object({
    searchParameters: z
      .array(SearchParameterSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of search parameters in this FHIR store that are used to configure this FHIR store.',
      }),
  })
  .openapi({ description: 'Contains the configuration for FHIR search.', required: [] })
  .openapi('SearchConfig')

const StreamConfigSchema = z
  .object({
    bigqueryDestination:
      GoogleCloudHealthcareV1beta1FhirBigQueryDestinationSchema.exactOptional().openapi({
        description:
          'The destination BigQuery structure that contains both the dataset location and corresponding schema config. The output is organized in one table per resource type. The server reuses the existing tables (if any) that are named after the resource types, e.g. "Patient", "Observation". When there is no existing table for a given resource type, the server attempts to create one. When a table schema doesn\'t align with the schema config, either because of existing incompatible schema or out of band incompatible modification, the server does not stream in new data. One resolution in this case is to delete the incompatible table and let the server recreate one, though the newly created table only contains data after the table recreation. BigQuery imposes a 1 MB limit on streaming insert row size, therefore any resource mutation that generates more than 1 MB of BigQuery data will not be streamed. Results are written to BigQuery tables according to the parameters in BigQueryDestination.WriteDisposition. Different versions of the same resource are distinguishable by the meta.versionId and meta.lastUpdated columns. The operation (CREATE/UPDATE/DELETE) that results in the new version is recorded in the meta.tag. The tables contain all historical resource versions since streaming was enabled. For query convenience, the server also creates one view per table of the same name containing only the current resource version. The streamed data in the BigQuery dataset is not guaranteed to be completely unique. The combination of the id and meta.versionId columns should ideally identify a single unique row. But in rare cases, duplicates may exist. At query time, users may use the SQL select statement to keep only one of the duplicate rows given an id and meta.versionId pair. Alternatively, the server created view mentioned above also filters out duplicates. If a resource mutation cannot be streamed to BigQuery, errors will be logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)).',
      }),
    deidentifiedStoreDestination: DeidentifiedStoreDestinationSchema.exactOptional().openapi({
      description:
        "The destination FHIR store for de-identified resources. After this field is added, all subsequent creates/updates/patches to the source store will be de-identified using the provided configuration and applied to the destination store. Importing resources to the source store will not trigger the streaming. If the source store already contains resources when this option is enabled, those resources will not be copied to the destination store unless they are subsequently updated. This may result in invalid references in the destination store. Before adding this config, you must grant the healthcare.fhirResources.update permission on the destination store to your project's **Cloud Healthcare Service Agent** [service account](https://cloud.google.com/healthcare/docs/how-tos/permissions-healthcare-api-gcp-products#the_cloud_healthcare_service_agent). The destination store must set enable_update_create to true. The destination store must have disable_referential_integrity set to true. If a resource cannot be de-identified, errors will be logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)).",
    }),
    resourceTypes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Supply a FHIR resource type (such as "Patient" or "Observation"). See https://www.hl7.org/fhir/valueset-resource-types.html for a list of all FHIR resource types. The server treats an empty list as an intent to stream all the supported resource types in this FHIR store.',
      }),
  })
  .openapi({ description: 'Contains configuration for streaming FHIR export.', required: [] })
  .openapi('StreamConfig')

const ValidationConfigSchema = z
  .object({
    disableFhirpathValidation: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to disable FHIRPath validation for incoming resources. Set this to true to disable checking incoming resources for conformance against FHIRPath requirement defined in the FHIR specification. This property only affects resource types that do not have profiles configured for them, any rules in enabled implementation guides will still be enforced.',
      }),
    disableProfileValidation: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to disable profile validation for this FHIR store. Set this to true to disable checking incoming resources for conformance against StructureDefinitions in this FHIR store.',
      }),
    disableReferenceTypeValidation: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to disable reference type validation for incoming resources. Set this to true to disable checking incoming resources for conformance against reference type requirement defined in the FHIR specification. This property only affects resource types that do not have profiles configured for them, any rules in enabled implementation guides will still be enforced.',
      }),
    disableRequiredFieldValidation: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to disable required fields validation for incoming resources. Set this to true to disable checking incoming resources for conformance against required fields requirement defined in the FHIR specification. This property only affects resource types that do not have profiles configured for them, any rules in enabled implementation guides will still be enforced.',
      }),
    enabledImplementationGuides: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of ImplementationGuide URLs in this FHIR store that are used to configure the profiles to use for validation. For example, to use the US Core profiles for validation, set `enabled_implementation_guides` to `["http://hl7.org/fhir/us/core/ImplementationGuide/ig"]`. If `enabled_implementation_guides` is empty or omitted, then incoming resources are only required to conform to the base FHIR profiles. Otherwise, a resource must conform to at least one profile listed in the `global` property of one of the enabled ImplementationGuides. The Cloud Healthcare API does not currently enforce all of the rules in a StructureDefinition. The following rules are supported: - min/max - minValue/maxValue - maxLength - type - fixed[x] - pattern[x] on simple types - slicing, when using "value" as the discriminator type When a URL cannot be resolved (for example, in a type assertion), the server does not return an error.',
      }),
  })
  .openapi({
    description: 'Contains the configuration for FHIR profiles and validation.',
    required: [],
  })
  .openapi('ValidationConfig')

const FhirStoreSchema = z
  .object({
    complexDataTypeReferenceParsing: z
      .enum(['COMPLEX_DATA_TYPE_REFERENCE_PARSING_UNSPECIFIED', 'DISABLED', 'ENABLED'])
      .exactOptional()
      .openapi({
        description:
          'Enable parsing of references within complex FHIR data types such as Extensions. If this value is set to ENABLED, then features like referential integrity and Bundle reference rewriting apply to all references. If this flag has not been specified the behavior of the FHIR store will not change, references in complex data types will not be parsed. New stores will have this value set to ENABLED after a notification period. Warning: turning on this flag causes processing existing resources to fail if they contain references to non-existent resources.',
      }),
    defaultSearchHandlingStrict: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, overrides the default search behavior for this FHIR store to `handling=strict` which returns an error for unrecognized search parameters. If false, uses the FHIR specification default `handling=lenient` which ignores unrecognized search parameters. The handling can always be changed from the default on an individual API call by setting the HTTP header `Prefer: handling=strict` or `Prefer: handling=lenient`.',
      }),
    disableReferentialIntegrity: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Immutable. Whether to disable referential integrity in this FHIR store. This field is immutable after FHIR store creation. The default value is false, meaning that the API enforces referential integrity and fails the requests that result in inconsistent state in the FHIR store. When this field is set to true, the API skips referential integrity checks. Consequently, operations that rely on references, such as GetPatientEverything, do not return all the results if broken references exist.',
      }),
    disableResourceVersioning: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Immutable. Whether to disable resource versioning for this FHIR store. This field can not be changed after the creation of FHIR store. If set to false, which is the default behavior, all write operations cause historical versions to be recorded automatically. The historical versions can be fetched through the history APIs, but cannot be updated. If set to true, no historical versions are kept. The server sends errors for attempts to read the historical versions.',
      }),
    enableUpdateCreate: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this FHIR store has the [updateCreate capability](https://www.hl7.org/fhir/capabilitystatement-definitions.html#CapabilityStatement.rest.resource.updateCreate). This determines if the client can use an Update operation to create a new resource with a client-specified ID. If false, all IDs are server-assigned through the Create operation and attempts to update a non-existent resource return errors. It is strongly advised not to include or encode any sensitive data such as patient identifiers in client-specified resource IDs. Those IDs are part of the FHIR resource path recorded in Cloud audit logs and Pub/Sub notifications. Those IDs can also be contained in reference fields within other resources.',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'User-supplied key-value pairs used to organize FHIR stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \\p{Ll}\\p{Lo}{0,62} Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\\p{Ll}\\p{Lo}\\p{N}_-]{0,63} No more than 64 labels can be associated with a given store.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Resource name of the FHIR store, of the form `projects/{project_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.',
      }),
    notificationConfig: NotificationConfigSchema.exactOptional().openapi({
      description:
        'If non-empty, publish all resource modifications of this FHIR store to this destination. The Pub/Sub message attributes contain a map with a string describing the action that has triggered the notification. For example, "action":"CreateResource". Deprecated. Use `notification_configs` instead.',
    }),
    notificationConfigs: z
      .array(FhirNotificationConfigSchema)
      .exactOptional()
      .openapi({
        description:
          'Specifies where and whether to send notifications upon changes to a Fhir store.',
      }),
    searchConfig: SearchConfigSchema.exactOptional().openapi({
      description: 'Configuration for how FHIR resources can be searched.',
    }),
    streamConfigs: z
      .array(StreamConfigSchema)
      .exactOptional()
      .openapi({
        description:
          "A list of streaming configs that configure the destinations of streaming export for every resource mutation in this FHIR store. Each store is allowed to have up to 10 streaming configs. After a new config is added, the next resource mutation is streamed to the new location in addition to the existing ones. When a location is removed from the list, the server stops streaming to that location. Before adding a new config, you must add the required [`bigquery.dataEditor`](https://cloud.google.com/bigquery/docs/access-control#bigquery.dataEditor) role to your project's **Cloud Healthcare Service Agent** [service account](https://cloud.google.com/iam/docs/service-accounts). Some lag (typically on the order of dozens of seconds) is expected before the results show up in the streaming destination.",
      }),
    validationConfig: ValidationConfigSchema.exactOptional().openapi({
      description:
        'Configuration for how to validate incoming FHIR resources against configured profiles.',
    }),
    version: z
      .enum(['VERSION_UNSPECIFIED', 'DSTU2', 'STU3', 'R4'])
      .exactOptional()
      .openapi({
        description:
          'Immutable. The FHIR specification version that this FHIR store supports natively. This field is immutable after store creation. Requests are rejected if they contain FHIR resources of a different version. Version is required for every FHIR store.',
      }),
  })
  .openapi({ description: 'Represents a FHIR store.', required: [] })
  .openapi('FhirStore')

const FhirStoreMetricSchema = z
  .object({
    count: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The total count of FHIR resources in the store of this resource type.',
      }),
    resourceType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The FHIR resource type this metric applies to.' }),
    structuredStorageSizeBytes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The total amount of structured storage used by FHIR resources of this resource type in the store.',
      }),
  })
  .openapi({
    description: 'Count of resources and total storage size by type for a given FHIR store.',
    required: [],
  })
  .openapi('FhirStoreMetric')

const FhirStoreMetricsSchema = z
  .object({
    metrics: z
      .array(FhirStoreMetricSchema)
      .exactOptional()
      .openapi({ description: 'List of FhirStoreMetric by resource type.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the FHIR store to get metrics for, in the format `projects/{project_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.',
      }),
  })
  .openapi({ description: 'List of metrics for a given FHIR store.', required: [] })
  .openapi('FhirStoreMetrics')

const FieldSchema = z
  .object({
    maxOccurs: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of times this field can be repeated. 0 or -1 means unbounded.',
      }),
    minOccurs: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The minimum number of times this field must be present/repeated.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the field. For example, "PID-1" or just "1".' }),
    table: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The HL7v2 table this field refers to. For example, PID-15 (Patient\'s Primary Language) usually refers to table "0296".',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of this field. A Type with this name must be defined in an Hl7TypesConfig.',
      }),
  })
  .openapi({ description: 'A (sub) field of a type.', required: [] })
  .openapi('Field')

const GcsSourceSchema = z
  .object({
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Points to a Cloud Storage URI containing file(s) to import. The URI must be in the following format: `gs://{bucket_id}/{object_id}`. The URI can include wildcards in `object_id` and thus identify multiple files. Supported wildcards: * `*` to match 0 or more non-separator characters * `**` to match 0 or more characters (including separators). Must be used at the end of a path and with no other wildcards in the path. Can also be used with a file extension (such as .ndjson), which imports all files with the extension in the specified directory and its sub-directories. For example, `gs://my-bucket/my-directory/**.ndjson` imports all files with `.ndjson` extensions in `my-directory/` and its sub-directories. * `?` to match 1 character Files matching the wildcard are expected to contain content only, no metadata.',
      }),
  })
  .openapi({
    description: 'Specifies the configuration for importing data from Cloud Storage.',
    required: [],
  })
  .openapi('GcsSource')

const GoogleCloudHealthcareV1beta1AnnotationGcsSourceSchema = z
  .object({
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Points to a Cloud Storage URI containing file(s) with content only. The URI must be in the following format: `gs://{bucket_id}/{object_id}`. The URI can include wildcards in `object_id` and thus identify multiple files. Supported wildcards: '*' to match 0 or more non-separator characters '**' to match 0 or more characters (including separators). Must be used at the end of a path and with no other wildcards in the path. Can also be used with a file extension (such as .dcm), which imports all files with the extension in the specified directory and its sub-directories. For example, `gs://my-bucket/my-directory/**.json` imports all files with .json extensions in `my-directory/` and its sub-directories. '?' to match 1 character All other URI formats are invalid. Files matching the wildcard are expected to contain content only, no metadata.",
      }),
  })
  .openapi({
    description: 'Specifies the configuration for importing data from Cloud Storage.',
    required: [],
  })
  .openapi('GoogleCloudHealthcareV1beta1AnnotationGcsSource')

const GoogleCloudHealthcareV1beta1ConsentGcsDestinationSchema = z
  .object({
    uriPrefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URI for a Cloud Storage directory where the server writes result files, in the format `gs://{bucket-id}/{path/to/destination/dir}`. If there is no trailing slash, the service appends one when composing the object path. The user is responsible for creating the Cloud Storage bucket and directory referenced in `uri_prefix`.',
      }),
  })
  .openapi({ description: 'The Cloud Storage location for export.', required: [] })
  .openapi('GoogleCloudHealthcareV1beta1ConsentGcsDestination')

const GoogleCloudHealthcareV1beta1DeidentifyDeidentifyDicomStoreSummarySchema = z
  .object({})
  .openapi({ description: 'Contains a summary of the DeidentifyDicomStore operation.' })
  .openapi('GoogleCloudHealthcareV1beta1DeidentifyDeidentifyDicomStoreSummary')

const GoogleCloudHealthcareV1beta1DeidentifyDeidentifyFhirStoreSummarySchema = z
  .object({})
  .openapi({ description: 'Contains a summary of the DeidentifyFhirStore operation.' })
  .openapi('GoogleCloudHealthcareV1beta1DeidentifyDeidentifyFhirStoreSummary')

const GoogleCloudHealthcareV1beta1DicomGcsSourceSchema = z
  .object({
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Points to a Cloud Storage URI containing file(s) with content only. The URI must be in the following format: `gs://{bucket_id}/{object_id}`. The URI can include wildcards in `object_id` and thus identify multiple files. Supported wildcards: * '*' to match 0 or more non-separator characters * '**' to match 0 or more characters (including separators). Must be used at the end of a path and with no other wildcards in the path. Can also be used with a file extension (such as .dcm), which imports all files with the extension in the specified directory and its sub-directories. For example, `gs://my-bucket/my-directory/**.dcm` imports all files with .dcm extensions in `my-directory/` and its sub-directories. * '?' to match 1 character. All other URI formats are invalid. Files matching the wildcard are expected to contain content only, no metadata.",
      }),
  })
  .openapi({
    description: 'Specifies the configuration for importing data from Cloud Storage.',
    required: [],
  })
  .openapi('GoogleCloudHealthcareV1beta1DicomGcsSource')

const GoogleCloudHealthcareV1beta1FhirExportResourcesResponseSchema = z
  .object({})
  .openapi({
    description:
      'Response when all resources export successfully. This structure is included in the response to describe the detailed outcome after the operation finishes successfully.',
  })
  .openapi('GoogleCloudHealthcareV1beta1FhirExportResourcesResponse')

const GoogleCloudHealthcareV1beta1FhirGcsSourceSchema = z
  .object({
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Points to a Cloud Storage URI containing file(s) to import. The URI must be in the following format: `gs://{bucket_id}/{object_id}`. The URI can include wildcards in `object_id` and thus identify multiple files. Supported wildcards: * `*` to match 0 or more non-separator characters * `**` to match 0 or more characters (including separators). Must be used at the end of a path and with no other wildcards in the path. Can also be used with a file extension (such as .ndjson), which imports all files with the extension in the specified directory and its sub-directories. For example, `gs://my-bucket/my-directory/**.ndjson` imports all files with `.ndjson` extensions in `my-directory/` and its sub-directories. * `?` to match 1 character Files matching the wildcard are expected to contain content only, no metadata.',
      }),
  })
  .openapi({
    description: 'Specifies the configuration for importing data from Cloud Storage.',
    required: [],
  })
  .openapi('GoogleCloudHealthcareV1beta1FhirGcsSource')

const GoogleCloudHealthcareV1beta1FhirImportResourcesResponseSchema = z
  .object({})
  .openapi({
    description:
      'Final response of importing resources. This structure is included in the response to describe the detailed outcome after the operation finishes successfully.',
  })
  .openapi('GoogleCloudHealthcareV1beta1FhirImportResourcesResponse')

const VersionSourceSchema = z
  .object({
    mshField: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The field to extract from the MSH segment. For example, "3.1" or "18[1].1".',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value to match with the field. For example, "My Application Name" or "2.3".',
      }),
  })
  .openapi({
    description: 'Describes a selector for extracting and matching an MSH field to a value.',
    required: [],
  })
  .openapi('VersionSource')

const Hl7SchemaConfigSchema = z
  .object({
    messageSchemaConfigs: z
      .record(z.string(), SchemaGroupSchema)
      .exactOptional()
      .openapi({
        description:
          'Map from each HL7v2 message type and trigger event pair, such as ADT_A04, to its schema configuration root group.',
      }),
    version: z
      .array(VersionSourceSchema)
      .exactOptional()
      .openapi({
        description:
          'Each VersionSource is tested and only if they all match is the schema used for the message.',
      }),
  })
  .openapi({
    description:
      'Root config message for HL7v2 schema. This contains a schema structure of groups and segments, and filters that determine which messages to apply the schema structure to.',
    required: [],
  })
  .openapi('Hl7SchemaConfig')

const TypeSchema = z
  .object({
    fields: z
      .array(FieldSchema)
      .exactOptional()
      .openapi({ description: 'The (sub) fields this type has (if not primitive).' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of this type. This would be the segment or datatype name. For example, "PID" or "XPN".',
      }),
    primitive: z
      .enum(['PRIMITIVE_UNSPECIFIED', 'STRING', 'VARIES', 'UNESCAPED_STRING'])
      .exactOptional()
      .openapi({
        description:
          'If this is a primitive type then this field is the type of the primitive For example, STRING. Leave unspecified for composite types.',
      }),
  })
  .openapi({
    description: 'A type definition for some HL7v2 type (incl. Segments and Datatypes).',
    required: [],
  })
  .openapi('Type')

const Hl7TypesConfigSchema = z
  .object({
    type: z
      .array(TypeSchema)
      .exactOptional()
      .openapi({ description: 'The HL7v2 type definitions.' }),
    version: z
      .array(VersionSourceSchema)
      .exactOptional()
      .openapi({
        description:
          'The version selectors that this config applies to. A message must match ALL version sources to apply.',
      }),
  })
  .openapi({
    description: 'Root config for HL7v2 datatype definitions for a specific HL7v2 version.',
    required: [],
  })
  .openapi('Hl7TypesConfig')

const Hl7V2NotificationConfigSchema = z
  .object({
    filter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Restricts notifications sent for messages matching a filter. If this is empty, all messages are matched. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in `yyyy-mm-dd` form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it\'s just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. Fields/functions available for filtering are: * `message_type`, from the MSH-9.1 field. For example, `NOT message_type = "ADT"`. * `send_date` or `sendDate`, the YYYY-MM-DD date the message was sent in the dataset\'s time_zone, from the MSH-7 segment. For example, `send_date < "2017-01-02"`. * `send_time`, the timestamp when the message was sent, using the RFC3339 time format for comparisons, from the MSH-7 segment. For example, `send_time < "2017-01-02T00:00:00-05:00"`. * `create_time`, the timestamp when the message was created in the HL7v2 store. Use the RFC3339 time format for comparisons. For example, `create_time < "2017-01-02T00:00:00-05:00"`. * `send_facility`, the care center that the message came from, from the MSH-4 segment. For example, `send_facility = "ABC"`. * `PatientId(value, type)`, which matches if the message lists a patient having an ID of the given value and type in the PID-2, PID-3, or PID-4 segments. For example, `PatientId("123456", "MRN")`. * `labels.x`, a string value of the label with key `x` as set using the Message.labels map. For example, `labels."priority"="high"`. The operator `:*` can be used to assert the existence of a label. For example, `labels."priority":*`.',
      }),
    pubsubTopic: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The [Pub/Sub](https://cloud.google.com/pubsub/docs/) topic that notifications of changes are published on. Supplied by the client. The notification is a `PubsubMessage` with the following fields: * `PubsubMessage.Data` contains the resource name. * `PubsubMessage.MessageId` is the ID of this notification. It is guaranteed to be unique within the topic. * `PubsubMessage.PublishTime` is the time when the message was published. Note that notifications are only sent if the topic is non-empty. [Topic names](https://cloud.google.com/pubsub/docs/overview#names) must be scoped to a project. Cloud Healthcare API service account must have publisher permissions on the given Pub/Sub topic. Not having adequate permissions causes the calls that send notifications to fail. If a notification can't be published to Pub/Sub, errors are logged to Cloud Logging. For more information, see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging).",
      }),
  })
  .openapi({
    description: 'Specifies where and whether to send notifications upon changes to a data store.',
    required: [],
  })
  .openapi('Hl7V2NotificationConfig')

const SchemaPackageSchema = z
  .object({
    ignoreMinOccurs: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Flag to ignore all min_occurs restrictions in the schema. This means that incoming messages can omit any group, segment, field, component, or subcomponent.',
      }),
    schemas: z
      .array(Hl7SchemaConfigSchema)
      .exactOptional()
      .openapi({
        description:
          'Schema configs that are layered based on their VersionSources that match the incoming message. Schema configs present in higher indices override those in lower indices with the same message type and trigger event if their VersionSources all match an incoming message.',
      }),
    schematizedParsingType: z
      .enum(['SCHEMATIZED_PARSING_TYPE_UNSPECIFIED', 'SOFT_FAIL', 'HARD_FAIL'])
      .exactOptional()
      .openapi({ description: 'Determines how messages that fail to parse are handled.' }),
    types: z
      .array(Hl7TypesConfigSchema)
      .exactOptional()
      .openapi({
        description:
          'Schema type definitions that are layered based on their VersionSources that match the incoming message. Type definitions present in higher indices override those in lower indices with the same type name if their VersionSources all match an incoming message.',
      }),
    unexpectedSegmentHandling: z
      .enum(['UNEXPECTED_SEGMENT_HANDLING_MODE_UNSPECIFIED', 'FAIL', 'SKIP', 'PARSE'])
      .exactOptional()
      .openapi({
        description:
          'Determines how unexpected segments (segments not matched to the schema) are handled.',
      }),
  })
  .openapi({
    description: 'A schema package contains a set of schemas and type definitions.',
    required: [],
  })
  .openapi('SchemaPackage')

const ParserConfigSchema = z
  .object({
    allowNullHeader: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Determines whether messages with no header are allowed.' }),
    schema: SchemaPackageSchema.exactOptional().openapi({
      description:
        'Schemas used to parse messages in this store, if schematized parsing is desired.',
    }),
    segmentTerminator: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Byte(s) to use as the segment terminator. If this is unset, '\\r' is used as segment terminator, matching the HL7 version 2 specification.",
      }),
    version: z
      .enum(['PARSER_VERSION_UNSPECIFIED', 'V1', 'V2', 'V3'])
      .exactOptional()
      .openapi({
        description:
          'Immutable. Determines the version of both the default parser to be used when `schema` is not given, as well as the schematized parser used when `schema` is specified. This field is immutable after HL7v2 store creation.',
      }),
  })
  .openapi({
    description:
      'The configuration for the parser. It determines how the server parses the messages.',
    required: [],
  })
  .openapi('ParserConfig')

const Hl7V2StoreSchema = z
  .object({
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'User-supplied key-value pairs used to organize HL7v2 stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \\p{Ll}\\p{Lo}{0,62} Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\\p{Ll}\\p{Lo}\\p{N}_-]{0,63} No more than 64 labels can be associated with a given store.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name of the HL7v2 store, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/hl7V2Stores/{hl7v2_store_id}`.',
      }),
    notificationConfig: NotificationConfigSchema.exactOptional().openapi({
      description:
        'The notification destination all messages (both Ingest & Create) are published on. Only the message name is sent as part of the notification. If this is unset, no notifications are sent. Supplied by the client.',
    }),
    notificationConfigs: z
      .array(Hl7V2NotificationConfigSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of notification configs. Each configuration uses a filter to determine whether to publish a message (both Ingest & Create) on the corresponding notification destination. Only the message name is sent as part of the notification. Supplied by the client.',
      }),
    parserConfig: ParserConfigSchema.exactOptional().openapi({
      description:
        'The configuration for the parser. It determines how the server parses the messages.',
    }),
    rejectDuplicateMessage: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Determines whether to reject duplicate messages. A duplicate message is a message with the same raw bytes as a message that has already been ingested/created in this HL7v2 store. The default value is false, meaning that the store accepts the duplicate messages and it also returns the same ACK message in the IngestMessageResponse as has been returned previously. Note that only one resource is created in the store. When this field is set to true, CreateMessage/IngestMessage requests with a duplicate message will be rejected by the store, and IngestMessageErrorDetail returns a NACK message upon rejection.',
      }),
  })
  .openapi({ description: 'Represents an HL7v2 store.', required: [] })
  .openapi('Hl7V2Store')

const HttpBodySchema = z
  .object({
    contentType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The HTTP Content-Type header value specifying the content type of the body.',
      }),
    data: z
      .string()
      .exactOptional()
      .openapi({ description: 'The HTTP request/response body as raw binary.' }),
    extensions: z
      .array(
        z.record(
          z.string(),
          z
            .any()
            .openapi({
              description: 'Properties of the object. Contains field @type with type URL.',
            }),
        ),
      )
      .exactOptional()
      .openapi({
        description:
          'Application specific response metadata. Must be set in the first response for streaming APIs.',
      }),
  })
  .openapi({
    description:
      "Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; } service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); } Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); } Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged.",
    required: [],
  })
  .openapi('HttpBody')

const ImportAnnotationsRequestSchema = z
  .object({ gcsSource: GoogleCloudHealthcareV1beta1AnnotationGcsSourceSchema.exactOptional() })
  .openapi({
    description:
      'Request to import Annotations. The Annotations to be imported must have client-supplied resource names which indicate the annotation resource. The import operation is not atomic. If a failure occurs, any annotations already imported are not removed.',
    required: [],
  })
  .openapi('ImportAnnotationsRequest')

const ImportAnnotationsResponseSchema = z
  .object({})
  .openapi({
    description:
      'Final response of importing Annotations in successful case. This structure is included in the response. It is only included when the operation finishes.',
  })
  .openapi('ImportAnnotationsResponse')

const ImportDicomDataRequestSchema = z
  .object({
    gcsSource: GoogleCloudHealthcareV1beta1DicomGcsSourceSchema.exactOptional().openapi({
      description:
        'Cloud Storage source data location and import configuration. The Cloud Healthcare Service Agent requires the `roles/storage.objectViewer` Cloud IAM roles on the Cloud Storage location.',
    }),
  })
  .openapi({
    description:
      'Imports data into the specified DICOM store. Returns an error if any of the files to import are not DICOM files. This API accepts duplicate DICOM instances by ignoring the newly-pushed instance. It does not overwrite.',
    required: [],
  })
  .openapi('ImportDicomDataRequest')

const ImportDicomDataResponseSchema = z
  .object({})
  .openapi({
    description: 'Returns additional information in regards to a completed DICOM store import.',
  })
  .openapi('ImportDicomDataResponse')

const ImportMessagesRequestSchema = z
  .object({
    gcsSource: GcsSourceSchema.exactOptional().openapi({
      description:
        'Cloud Storage source data location and import configuration. The Cloud Healthcare Service Agent requires the `roles/storage.objectViewer` Cloud IAM roles on the Cloud Storage location.',
    }),
  })
  .openapi({ description: 'Request to import messages.', required: [] })
  .openapi('ImportMessagesRequest')

const ImportMessagesResponseSchema = z
  .object({})
  .openapi({
    description:
      'Final response of importing messages. This structure is included in the response to describe the detailed outcome. It is only included when the operation finishes successfully.',
  })
  .openapi('ImportMessagesResponse')

const ImportResourcesRequestSchema = z
  .object({
    contentStructure: z
      .enum([
        'CONTENT_STRUCTURE_UNSPECIFIED',
        'BUNDLE',
        'RESOURCE',
        'BUNDLE_PRETTY',
        'RESOURCE_PRETTY',
      ])
      .exactOptional()
      .openapi({
        description:
          'The content structure in the source location. If not specified, the server treats the input source files as BUNDLE.',
      }),
    gcsSource: GoogleCloudHealthcareV1beta1FhirGcsSourceSchema.exactOptional().openapi({
      description:
        'Cloud Storage source data location and import configuration. The Cloud Healthcare Service Agent requires the `roles/storage.objectViewer` Cloud IAM roles on the Cloud Storage location. The Healthcare Service Agent Each Cloud Storage object should be a text file that contains the format specified in ContentStructure.',
    }),
  })
  .openapi({ description: 'Request to import resources.', required: [] })
  .openapi('ImportResourcesRequest')

const IngestMessageRequestSchema = z
  .object({
    message: MessageSchema.exactOptional().openapi({ description: 'HL7v2 message to ingest.' }),
  })
  .openapi({ description: 'Ingests a message into the specified HL7v2 store.', required: [] })
  .openapi('IngestMessageRequest')

const IngestMessageResponseSchema = z
  .object({
    hl7Ack: z.string().exactOptional().openapi({ description: 'HL7v2 ACK message.' }),
    message: MessageSchema.exactOptional().openapi({ description: 'Created message resource.' }),
  })
  .openapi({
    description: 'Acknowledges that a message has been ingested into the specified HL7v2 store.',
    required: [],
  })
  .openapi('IngestMessageResponse')

const ListAnnotationStoresResponseSchema = z
  .object({
    annotationStores: z
      .array(AnnotationStoreSchema)
      .exactOptional()
      .openapi({
        description:
          "The returned Annotation stores. Won't be more Annotation stores than the value of page_size in the request.",
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results or empty if there are no more results in the list.',
      }),
  })
  .openapi({ description: 'Lists the Annotation stores in the given dataset.', required: [] })
  .openapi('ListAnnotationStoresResponse')

const ListAnnotationsResponseSchema = z
  .object({
    annotations: z
      .array(AnnotationSchema)
      .exactOptional()
      .openapi({
        description:
          "The returned Annotations. Won't be more values than the value of page_size in the request. See `AnnotationView` in the request for populated fields.",
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results or empty if there are no more results in the list.',
      }),
  })
  .openapi({
    description: 'Lists the Annotations in the specified Annotation store.',
    required: [],
  })
  .openapi('ListAnnotationsResponse')

const ListAttributeDefinitionsResponseSchema = z
  .object({
    attributeDefinitions: z
      .array(AttributeDefinitionSchema)
      .exactOptional()
      .openapi({
        description:
          'The returned Attribute definitions. The maximum number of attributes returned is determined by the value of page_size in the ListAttributeDefinitionsRequest.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListAttributeDefinitionsResponse')

const ListConsentArtifactsResponseSchema = z
  .object({
    consentArtifacts: z
      .array(ConsentArtifactSchema)
      .exactOptional()
      .openapi({
        description:
          'The returned Consent artifacts. The maximum number of artifacts returned is determined by the value of page_size in the ListConsentArtifactsRequest.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListConsentArtifactsResponse')

const ListConsentRevisionsResponseSchema = z
  .object({
    consents: z
      .array(ConsentSchema)
      .exactOptional()
      .openapi({
        description:
          'The returned Consent revisions. The maximum number of revisions returned is determined by the value of `page_size` in the ListConsentRevisionsRequest.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListConsentRevisionsResponse')

const ListConsentStoresResponseSchema = z
  .object({
    consentStores: z
      .array(ConsentStoreSchema)
      .exactOptional()
      .openapi({
        description:
          'The returned consent stores. The maximum number of stores returned is determined by the value of page_size in the ListConsentStoresRequest.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListConsentStoresResponse')

const ListConsentsResponseSchema = z
  .object({
    consents: z
      .array(ConsentSchema)
      .exactOptional()
      .openapi({
        description:
          'The returned Consents. The maximum number of Consents returned is determined by the value of page_size in the ListConsentsRequest.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListConsentsResponse')

const ListDatasetsResponseSchema = z
  .object({
    datasets: z
      .array(DatasetSchema)
      .exactOptional()
      .openapi({ description: 'The first page of datasets.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
  })
  .openapi({ description: 'Lists the available datasets.', required: [] })
  .openapi('ListDatasetsResponse')

const ListDicomStoresResponseSchema = z
  .object({
    dicomStores: z
      .array(DicomStoreSchema)
      .exactOptional()
      .openapi({
        description:
          "The returned DICOM stores. Won't be more DICOM stores than the value of page_size in the request.",
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results or empty if there are no more results in the list.',
      }),
  })
  .openapi({ description: 'Lists the DICOM stores in the given dataset.', required: [] })
  .openapi('ListDicomStoresResponse')

const ListFhirStoresResponseSchema = z
  .object({
    fhirStores: z
      .array(FhirStoreSchema)
      .exactOptional()
      .openapi({
        description:
          "The returned FHIR stores. Won't be more FHIR stores than the value of page_size in the request.",
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results or empty if there are no more results in the list.',
      }),
  })
  .openapi({ description: 'Lists the FHIR stores in the given dataset.', required: [] })
  .openapi('ListFhirStoresResponse')

const ListHl7V2StoresResponseSchema = z
  .object({
    hl7V2Stores: z
      .array(Hl7V2StoreSchema)
      .exactOptional()
      .openapi({
        description:
          "The returned HL7v2 stores. Won't be more HL7v2 stores than the value of page_size in the request.",
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results or empty if there are no more results in the list.',
      }),
  })
  .openapi({ description: 'Lists the HL7v2 stores in the given dataset.', required: [] })
  .openapi('ListHl7V2StoresResponse')

const LocationSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The friendly name for this location, typically a nearby city name. For example, "Tokyo".',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"}',
      }),
    locationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The canonical id for this location. For example: `"us-east1"`.' }),
    metadata: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Service-specific metadata. For example the available capacity at the given location.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`',
      }),
  })
  .openapi({
    description: 'A resource that represents Google Cloud Platform location.',
    required: [],
  })
  .openapi('Location')

const ListLocationsResponseSchema = z
  .object({
    locations: z
      .array(LocationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of locations that matches the specified filter in the request.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
  })
  .openapi({ description: 'The response message for Locations.ListLocations.', required: [] })
  .openapi('ListLocationsResponse')

const ListMessagesResponseSchema = z
  .object({
    hl7V2Messages: z
      .array(MessageSchema)
      .exactOptional()
      .openapi({
        description:
          "The returned Messages. Won't be more Messages than the value of page_size in the request. See view for populated fields.",
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results or empty if there are no more results in the list.',
      }),
  })
  .openapi({ description: 'Lists the messages in the specified HL7v2 store.', required: [] })
  .openapi('ListMessagesResponse')

const StatusSchema = z
  .object({
    code: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The status code, which should be an enum value of google.rpc.Code.',
      }),
    details: z
      .array(
        z.record(
          z.string(),
          z
            .any()
            .openapi({
              description: 'Properties of the object. Contains field @type with type URL.',
            }),
        ),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of messages that carry the error details. There is a common set of message types for APIs to use.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.',
      }),
  })
  .openapi({
    description:
      'The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).',
    required: [],
  })
  .openapi('Status')

const OperationSchema = z
  .object({
    done: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.',
      }),
    error: StatusSchema.exactOptional().openapi({
      description: 'The error result of the operation in case of failure or cancellation.',
    }),
    metadata: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.',
      }),
    response: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.',
      }),
  })
  .openapi({
    description:
      'This resource represents a long-running operation that is the result of a network API call.',
    required: [],
  })
  .openapi('Operation')

const ListOperationsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
    operations: z
      .array(OperationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of operations that matches the specified filter in the request.',
      }),
  })
  .openapi({ description: 'The response message for Operations.ListOperations.', required: [] })
  .openapi('ListOperationsResponse')

const UserDataMappingSchema = z
  .object({
    archiveTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Indicates the time when this mapping was archived.',
        readOnly: true,
      }),
    archived: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. Indicates whether this mapping is archived.',
        readOnly: true,
      }),
    dataId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. A unique identifier for the mapped resource.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name of the User data mapping, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/userDataMappings/{user_data_mapping_id}`.',
      }),
    resourceAttributes: z
      .array(AttributeSchema)
      .exactOptional()
      .openapi({
        description:
          'Attributes of the resource. Only explicitly set attributes are displayed here. Attribute definitions with defaults set implicitly apply to these User data mappings. Attributes listed here must be single valued, that is, exactly one value is specified for the field "values" in each Attribute.',
      }),
    userId: z
      .string()
      .exactOptional()
      .openapi({ description: "Required. User's UUID provided by the client." }),
  })
  .openapi({ description: 'Maps a resource to the associated user and Attributes.', required: [] })
  .openapi('UserDataMapping')

const ListUserDataMappingsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
    userDataMappings: z
      .array(UserDataMappingSchema)
      .exactOptional()
      .openapi({
        description:
          'The returned User data mappings. The maximum number of User data mappings returned is determined by the value of page_size in the ListUserDataMappingsRequest.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListUserDataMappingsResponse')

const ProgressCounterSchema = z
  .object({
    failure: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of units that failed in the operation.' }),
    pending: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of units that are pending in the operation.' }),
    success: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of units that succeeded in the operation.' }),
  })
  .openapi({
    description: "ProgressCounter provides counters to describe an operation's progress.",
    required: [],
  })
  .openapi('ProgressCounter')

const OperationMetadataSchema = z
  .object({
    apiMethodName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the API method that initiated the operation.' }),
    cancelRequested: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Specifies if cancellation was requested for the operation.' }),
    counter: ProgressCounterSchema.exactOptional(),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time at which the operation was created by the API.' }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time at which execution was completed.' }),
    logsUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A link to audit and error logs in the log viewer. Error logs are generated only by some operations, listed at [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging).',
      }),
  })
  .openapi({
    description:
      "OperationMetadata provides information about the operation execution. Returned in the long-running operation's metadata field.",
    required: [],
  })
  .openapi('OperationMetadata')

const PolicySchema = z
  .object({
    auditConfigs: z
      .array(AuditConfigSchema)
      .exactOptional()
      .openapi({ description: 'Specifies cloud audit logging configuration for this policy.' }),
    bindings: z
      .array(BindingSchema)
      .exactOptional()
      .openapi({
        description:
          'Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.',
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.',
      }),
    version: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).',
      }),
  })
  .openapi({
    description:
      'An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp(\'2020-10-01T00:00:00.000Z\')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp(\'2020-10-01T00:00:00.000Z\') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).',
    required: [],
  })
  .openapi('Policy')

const QueryAccessibleDataRequestSchema = z
  .object({
    gcsDestination: GoogleCloudHealthcareV1beta1ConsentGcsDestinationSchema.exactOptional().openapi(
      {
        description:
          'The Cloud Storage destination. The Cloud Healthcare API service account must have the `roles/storage.objectAdmin` Cloud IAM role for this Cloud Storage location. The object name is in the following format: query-accessible-data-result-{operation_id}.txt where each line contains a single data_id.',
      },
    ),
    requestAttributes: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'The values of request attributes associated with this access request.',
      }),
    resourceAttributes: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The values of resource attributes associated with the type of resources being requested. If no values are specified, then all resource types are included in the output.',
      }),
  })
  .openapi({
    description:
      'Queries all data_ids that are consented for a given use in the given consent store and writes them to a specified destination. The returned Operation includes a progress counter for the number of User data mappings processed. Errors are logged to Cloud Logging (see [Viewing error logs in Cloud Logging] (https://cloud.google.com/healthcare/docs/how-tos/logging) and [QueryAccessibleData] for a sample log entry).',
    required: [],
  })
  .openapi('QueryAccessibleDataRequest')

const QueryAccessibleDataResponseSchema = z
  .object({
    gcsUris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of files, each of which contains a list of data_id(s) that are consented for a specified use in the request.',
      }),
  })
  .openapi({
    description:
      'Response for successful QueryAccessibleData operations. This structure is included in the response upon operation completion.',
    required: [],
  })
  .openapi('QueryAccessibleDataResponse')

const RejectConsentRequestSchema = z
  .object({
    consentArtifact: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. The resource name of the Consent artifact that contains documentation of the user's rejection of the draft Consent, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consentArtifacts/{consent_artifact_id}`. If the draft Consent had a Consent artifact, this Consent artifact overwrites it.",
      }),
  })
  .openapi({
    description:
      'Rejects the latest revision of the specified Consent by committing a new revision with `state` updated to `REJECTED`. If the latest revision of the given Consent is in the `REJECTED` state, no new revision is committed.',
    required: [],
  })
  .openapi('RejectConsentRequest')

const RevokeConsentRequestSchema = z
  .object({
    consentArtifact: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. The resource name of the Consent artifact that contains proof of the user's revocation of the Consent, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consentArtifacts/{consent_artifact_id}`.",
      }),
  })
  .openapi({
    description:
      'Revokes the latest revision of the specified Consent by committing a new revision with `state` updated to `REVOKED`. If the latest revision of the given Consent is in the `REVOKED` state, no new revision is committed.',
    required: [],
  })
  .openapi('RevokeConsentRequest')

const SearchResourcesRequestSchema = z
  .object({
    resourceType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The FHIR resource type to search, such as Patient or Observation. For a complete list, see the FHIR Resource Index ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html), [STU3](https://hl7.org/implement/standards/fhir/STU3/resourcelist.html), [R4](https://hl7.org/implement/standards/fhir/R4/resourcelist.html)).',
      }),
  })
  .openapi({
    description: 'Request to search the resources in the specified FHIR store.',
    required: [],
  })
  .openapi('SearchResourcesRequest')

const SetIamPolicyRequestSchema = z
  .object({
    policy: PolicySchema.exactOptional().openapi({
      description:
        'REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.',
    }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`',
      }),
  })
  .openapi({ description: 'Request message for `SetIamPolicy` method.', required: [] })
  .openapi('SetIamPolicyRequest')

const TestIamPermissionsRequestSchema = z
  .object({
    permissions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).',
      }),
  })
  .openapi({ description: 'Request message for `TestIamPermissions` method.', required: [] })
  .openapi('TestIamPermissionsRequest')

const TestIamPermissionsResponseSchema = z
  .object({
    permissions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A subset of `TestPermissionsRequest.permissions` that the caller is allowed.',
      }),
  })
  .openapi({ description: 'Response message for `TestIamPermissions` method.', required: [] })
  .openapi('TestIamPermissionsResponse')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const postV1beta1ConsentStoreCheckDataAccessRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{consentStore}:checkDataAccess',
  tags: ['projects'],
  description:
    'Checks if a particular data_id of a User data mapping in the specified consent store is consented for the specified use.',
  operationId: 'healthcare.projects.locations.datasets.consentStores.checkDataAccess',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      consentStore: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Name of the consent store where the requested data_id is stored, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}`.',
            in: 'path',
            name: 'consentStore',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CheckDataAccessRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CheckDataAccessResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ConsentStoreEvaluateUserConsentsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{consentStore}:evaluateUserConsents',
  tags: ['projects'],
  description:
    "Evaluates the user's Consents for all matching User data mappings. Note: User data mappings are indexed asynchronously, which can cause a slight delay between the time mappings are created or updated and when they are included in EvaluateUserConsents results.",
  operationId: 'healthcare.projects.locations.datasets.consentStores.evaluateUserConsents',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      consentStore: z
        .string()
        .openapi({
          param: {
            description: 'Required. Name of the consent store to retrieve User data mappings from.',
            in: 'path',
            name: 'consentStore',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EvaluateUserConsentsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EvaluateUserConsentsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ConsentStoreQueryAccessibleDataRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{consentStore}:queryAccessibleData',
  tags: ['projects'],
  description:
    'Queries all data_ids that are consented for a specified use in the given consent store and writes them to a specified destination. The returned Operation includes a progress counter for the number of User data mappings processed. If the request is successful, a detailed response is returned of type QueryAccessibleDataResponse, contained in the response field when the operation finishes. The metadata field type is OperationMetadata. Errors are logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)). For example, the following sample log entry shows a `failed to evaluate consent policy` error that occurred during a QueryAccessibleData call to consent store `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}`. ```json jsonPayload: { @type: "type.googleapis.com/google.cloud.healthcare.logging.QueryAccessibleDataLogEntry" error: { code: 9 message: "failed to evaluate consent policy" } resourceName: "projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consents/{consent_id}" } logName: "projects/{project_id}/logs/healthcare.googleapis.com%2Fquery_accessible_data" operation: { id: "projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/operations/{operation_id}" producer: "healthcare.googleapis.com/QueryAccessibleData" } receiveTimestamp: "TIMESTAMP" resource: { labels: { consent_store_id: "{consent_store_id}" dataset_id: "{dataset_id}" location: "{location_id}" project_id: "{project_id}" } type: "healthcare_consent_store" } severity: "ERROR" timestamp: "TIMESTAMP" ```',
  operationId: 'healthcare.projects.locations.datasets.consentStores.queryAccessibleData',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      consentStore: z
        .string()
        .openapi({
          param: {
            description: 'Required. Name of the consent store to retrieve User data mappings from.',
            in: 'path',
            name: 'consentStore',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: QueryAccessibleDataRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1NameRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}',
  tags: ['projects'],
  description:
    'Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.',
  operationId: 'healthcare.projects.locations.datasets.operations.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      view: z
        .enum([
          'MESSAGE_VIEW_UNSPECIFIED',
          'RAW_ONLY',
          'PARSED_ONLY',
          'FULL',
          'SCHEMATIZED_ONLY',
          'BASIC',
        ])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies which parts of the Message resource to return in the response. When unspecified, equivalent to FULL.',
            in: 'query',
            name: 'view',
            schema: {
              enum: [
                'MESSAGE_VIEW_UNSPECIFIED',
                'RAW_ONLY',
                'PARSED_ONLY',
                'FULL',
                'SCHEMATIZED_ONLY',
                'BASIC',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the operation resource.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const putV1beta1NameRoute = createRoute({
  method: 'put',
  path: '/v1beta1/{name}',
  tags: ['projects'],
  description:
    'Updates the entire contents of a resource. Implements the FHIR standard update interaction ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/http.html#update), [STU3](https://hl7.org/implement/standards/fhir/STU3/http.html#update), [R4](https://hl7.org/implement/standards/fhir/R4/http.html#update)). If the specified resource does not exist and the FHIR store has enable_update_create set, creates the resource with the client-specified ID. It is strongly advised not to include or encode any sensitive data such as patient identifiers in client-specified resource IDs. Those IDs are part of the FHIR resource path recorded in Cloud Audit Logs and Pub/Sub notifications. Those IDs can also be contained in reference fields within other resources. The request body must contain a JSON-encoded FHIR resource, and the request headers must contain `Content-Type: application/fhir+json`. The resource must contain an `id` element having an identical value to the ID in the REST path of the request. On success, the response body contains a JSON-encoded representation of the updated resource, including the server-assigned version ID. Errors generated by the FHIR store contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. For samples that show how to call `update`, see [Updating a FHIR resource](https://cloud.google.com/healthcare/docs/how-tos/fhir-resources#updating_a_fhir_resource).',
  operationId: 'healthcare.projects.locations.datasets.fhirStores.fhir.update',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the resource to update.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: HttpBodySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: HttpBodySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV1beta1NameRoute = createRoute({
  method: 'delete',
  path: '/v1beta1/{name}',
  tags: ['projects'],
  description: 'Deletes an HL7v2 message.',
  operationId: 'healthcare.projects.locations.datasets.hl7V2Stores.messages.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The resource name of the HL7v2 message to delete.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const patchV1beta1NameRoute = createRoute({
  method: 'patch',
  path: '/v1beta1/{name}',
  tags: ['projects'],
  description:
    "Update the message. The contents of the message in Message.data and data extracted from the contents such as Message.create_time can't be altered. Only the Message.labels field is allowed to be updated. The labels in the request are merged with the existing set of labels. Existing labels with the same keys are updated.",
  operationId: 'healthcare.projects.locations.datasets.hl7V2Stores.messages.patch',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Resource name of the Message, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/hl7V2Stores/{hl7_v2_store_id}/messages/{message_id}`. Assigned by the server.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MessageSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MessageSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1NameEverythingRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}/$everything',
  tags: ['projects'],
  description:
    'Retrieves a Patient resource and resources related to that patient. Implements the FHIR extended operation Patient-everything ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/patient-operations.html#everything), [STU3](https://hl7.org/implement/standards/fhir/STU3/patient-operations.html#everything), [R4](https://hl7.org/implement/standards/fhir/R4/patient-operations.html#everything)). On success, the response body contains a JSON-encoded representation of a `Bundle` resource of type `searchset`, containing the results of the operation. Errors generated by the FHIR store contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. The resources in scope for the response are: * The patient resource itself. * All the resources directly referenced by the patient resource. * Resources directly referencing the patient resource that meet the inclusion criteria. The inclusion criteria are based on the membership rules in the patient compartment definition ([DSTU2](https://hl7.org/fhir/DSTU2/compartment-patient.html), [STU3](http://www.hl7.org/fhir/stu3/compartmentdefinition-patient.html), [R4](https://hl7.org/fhir/R4/compartmentdefinition-patient.html)), which details the eligible resource types and referencing search parameters. For samples that show how to call `Patient-everything`, see [Getting all patient compartment resources](https://cloud.google.com/healthcare/docs/how-tos/fhir-resources#getting_all_patient_compartment_resources).',
  operationId: 'healthcare.projects.locations.datasets.fhirStores.fhir.Patient-everything',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      _count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Maximum number of resources in a page. If not specified, 100 is used. May not be larger than 1000.',
            in: 'query',
            name: '_count',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      _page_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used to retrieve the next or previous page of results when using pagination. Set `_page_token` to the value of _page_token set in next or previous page links\' url. Next and previous page are returned in the response bundle\'s links field, where `link.relation` is "previous" or "next". Omit `_page_token` if no previous request has been made.',
            in: 'query',
            name: '_page_token',
            schema: { type: 'string' },
            required: false,
          },
        }),
      _since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If provided, only resources updated after this time are returned. The time uses the format YYYY-MM-DDThh:mm:ss.sss+zz:zz. For example, `2015-02-07T13:28:17.239+02:00` or `2017-01-01T00:00:00Z`. The time must be specified to the second and include a time zone.',
            in: 'query',
            name: '_since',
            schema: { type: 'string' },
            required: false,
          },
        }),
      _type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "String of comma-delimited FHIR resource types. If provided, only resources of the specified resource type(s) are returned. Specifying multiple `_type` parameters isn't supported. For example, the result of `_type=Observation&_type=Encounter` is undefined. Use `_type=Observation,Encounter` instead.",
            in: 'query',
            name: '_type',
            schema: { type: 'string' },
            required: false,
          },
        }),
      end: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The response includes records prior to the end date. The date uses the format YYYY-MM-DD. If no end date is provided, all records subsequent to the start date are in scope.',
            in: 'query',
            name: 'end',
            schema: { type: 'string' },
            required: false,
          },
        }),
      start: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The response includes records subsequent to the start date. The date uses the format YYYY-MM-DD. If no start date is provided, all records prior to the end date are in scope.',
            in: 'query',
            name: 'start',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Name of the `Patient` resource for which the information is required.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: HttpBodySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV1beta1NamePurgeRoute = createRoute({
  method: 'delete',
  path: '/v1beta1/{name}/$purge',
  tags: ['projects'],
  description:
    'Deletes all the historical versions of a resource (excluding the current version) from the FHIR store. To remove all versions of a resource, first delete the current version and then call this method. This is not a FHIR standard operation. For samples that show how to call `Resource-purge`, see [Deleting historical versions of a FHIR resource](https://cloud.google.com/healthcare/docs/how-tos/fhir-resources#deleting_historical_versions_of_a_fhir_resource).',
  operationId: 'healthcare.projects.locations.datasets.fhirStores.fhir.Resource-purge',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the resource to purge.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1NameTranslateRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}/$translate',
  tags: ['projects'],
  description:
    'Translates a code from one value set to another using a concept map. You can provide your own concept maps to translate any code system to another code system. Implements the FHIR standard $translate operation ([DSTU2](https://www.hl7.org/fhir/DSTU2/operation-conceptmap-translate.html), [STU3](https://www.hl7.org/fhir/STU3/operation-conceptmap-translate.html), [R4](https://www.hl7.org/fhir/R4/operation-conceptmap-translate.html)). On success, the response body contains a JSON-encoded representation of a FHIR Parameters resource, which includes the translation result. Errors generated by the FHIR store contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead.',
  operationId: 'healthcare.projects.locations.datasets.fhirStores.fhir.ConceptMap-translate',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      code: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The code to translate.',
            in: 'query',
            name: 'code',
            schema: { type: 'string' },
            required: false,
          },
        }),
      conceptMapVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The version of the concept map to use. If unset, the most current version is used.',
            in: 'query',
            name: 'conceptMapVersion',
            schema: { type: 'string' },
            required: false,
          },
        }),
      system: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The system for the code to be translated.',
            in: 'query',
            name: 'system',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The URL for the concept map to use for the translation.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: HttpBodySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1NameHistoryRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}/_history',
  tags: ['projects'],
  description:
    'Lists all the versions of a resource (including the current version and deleted versions) from the FHIR store. Implements the per-resource form of the FHIR standard history interaction ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/http.html#history), [STU3](https://hl7.org/implement/standards/fhir/STU3/http.html#history), [R4](https://hl7.org/implement/standards/fhir/R4/http.html#history)). On success, the response body contains a JSON-encoded representation of a `Bundle` resource of type `history`, containing the version history sorted from most recent to oldest versions. Errors generated by the FHIR store contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. For samples that show how to call `history`, see [Listing FHIR resource versions](https://cloud.google.com/healthcare/docs/how-tos/fhir-resources#listing_fhir_resource_versions).',
  operationId: 'healthcare.projects.locations.datasets.fhirStores.fhir.history',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      _at: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only include resource versions that were current at some point during the time period specified in the date time value. The date parameter format is yyyy-mm-ddThh:mm:ss[Z|(+|-)hh:mm] Clients may specify any of the following: * An entire year: `_at=2019` * An entire month: `_at=2019-01` * A specific day: `_at=2019-01-20` * A specific second: `_at=2018-12-31T23:59:58Z`',
            in: 'query',
            name: '_at',
            schema: { type: 'string' },
            required: false,
          },
        }),
      _count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of search results on a page. If not specified, 100 is used. May not be larger than 1000.',
            in: 'query',
            name: '_count',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      _page_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used to retrieve the first, previous, next, or last page of resource versions when using pagination. Value should be set to the value of `_page_token` set in next or previous page links\' URLs. Next and previous page are returned in the response bundle\'s links field, where `link.relation` is "previous" or "next". Omit `_page_token` if no previous request has been made.',
            in: 'query',
            name: '_page_token',
            schema: { type: 'string' },
            required: false,
          },
        }),
      _since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only include resource versions that were created at or after the given instant in time. The instant in time uses the format YYYY-MM-DDThh:mm:ss.sss+zz:zz (for example 2015-02-07T13:28:17.239+02:00 or 2017-01-01T00:00:00Z). The time must be specified to the second and include a time zone.',
            in: 'query',
            name: '_since',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the resource to retrieve.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: HttpBodySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1NameFhirMetadataRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}/fhir/metadata',
  tags: ['projects'],
  description:
    'Gets the FHIR capability statement ([STU3](https://hl7.org/implement/standards/fhir/STU3/capabilitystatement.html), [R4](https://hl7.org/implement/standards/fhir/R4/capabilitystatement.html)), or the [conformance statement](https://hl7.org/implement/standards/fhir/DSTU2/conformance.html) in the DSTU2 case for the store, which contains a description of functionality supported by the server. Implements the FHIR standard capabilities interaction ([STU3](https://hl7.org/implement/standards/fhir/STU3/http.html#capabilities), [R4](https://hl7.org/implement/standards/fhir/R4/http.html#capabilities)), or the [conformance interaction](https://hl7.org/implement/standards/fhir/DSTU2/http.html#conformance) in the DSTU2 case. On success, the response body contains a JSON-encoded representation of a `CapabilityStatement` resource.',
  operationId: 'healthcare.projects.locations.datasets.fhirStores.fhir.capabilities',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Name of the FHIR store to retrieve the capabilities for.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: HttpBodySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1NameLocationsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}/locations',
  tags: ['projects'],
  description: 'Lists information about the supported locations for this service.',
  operationId: 'healthcare.projects.locations.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of results to return. If not set, the service selects a default.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The resource that owns the locations collection, if applicable.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListLocationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1NameOperationsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}/operations',
  tags: ['projects'],
  description:
    "Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.",
  operationId: 'healthcare.projects.locations.datasets.operations.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The standard list filter.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The standard list page size.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The standard list page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: "The name of the operation's parent resource.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListOperationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1NameActivateRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:activate',
  tags: ['projects'],
  description:
    'Activates the latest revision of the specified Consent by committing a new revision with `state` updated to `ACTIVE`. If the latest revision of the specified Consent is in the `ACTIVE` state, no new revision is committed. A FAILED_PRECONDITION error occurs if the latest revision of the specified consent is in the `REJECTED` or `REVOKED` state.',
  operationId: 'healthcare.projects.locations.datasets.consentStores.consents.activate',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the Consent to activate, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consents/{consent_id}`. An INVALID_ARGUMENT error occurs if `revision_id` is specified in the name.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ActivateConsentRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ConsentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1NameArchiveRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:archive',
  tags: ['projects'],
  description: 'Archives the specified User data mapping.',
  operationId: 'healthcare.projects.locations.datasets.consentStores.userDataMappings.archive',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. The resource name of the User data mapping to archive.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ArchiveUserDataMappingRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ArchiveUserDataMappingResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1NameCancelRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:cancel',
  tags: ['projects'],
  description:
    "Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.",
  operationId: 'healthcare.projects.locations.datasets.operations.cancel',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the operation resource to be cancelled.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CancelOperationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1NameConfigureSearchRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:configureSearch',
  tags: ['projects'],
  description:
    'Configure the search parameters for the FHIR store and reindex resources in the FHIR store according to the defined search parameters. The search parameters provided in this request will replace any previous search configuration. The target SearchParameter resources need to exist in the store before calling ConfigureSearch, otherwise an error will occur. This method returns an Operation that can be used to track the progress of the reindexing by calling GetOperation.',
  operationId: 'healthcare.projects.locations.datasets.fhirStores.configureSearch',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the FHIR store to configure, in the format `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ConfigureSearchRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV1beta1NameDeleteRevisionRoute = createRoute({
  method: 'delete',
  path: '/v1beta1/{name}:deleteRevision',
  tags: ['projects'],
  description:
    'Deletes the specified revision of a Consent. An INVALID_ARGUMENT error occurs if the specified revision is the latest revision.',
  operationId: 'healthcare.projects.locations.datasets.consentStores.consents.deleteRevision',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the Consent revision to delete, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consents/{consent_id}@{revision_id}`. An INVALID_ARGUMENT error occurs if `revision_id` is not specified in the name.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1NameEvaluateRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:evaluate',
  tags: ['projects'],
  description:
    'Evaluate an Annotation store against a ground truth Annotation store. When the operation finishes successfully, a detailed response is returned of type EvaluateAnnotationStoreResponse, contained in the response. The metadata field type is OperationMetadata. Errors are logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)).',
  operationId: 'healthcare.projects.locations.datasets.annotationStores.evaluate',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The Annotation store to compare against `golden_store`, in the format of `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/annotationStores/{annotation_store_id}`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EvaluateAnnotationStoreRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1NameExportRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:export',
  tags: ['projects'],
  description:
    'Exports the messages to a destination. To filter messages to be exported, define a filter using the start and end time, relative to the message generation time (MSH.7). This API returns an Operation that can be used to track the status of the job by calling GetOperation. Immediate fatal errors appear in the error field. Otherwise, when the operation finishes, a detailed response of type ExportMessagesResponse is returned in the response field. The metadata field type for this operation is OperationMetadata.',
  operationId: 'healthcare.projects.locations.datasets.hl7V2Stores.export',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the source HL7v2 store, in the format `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/hl7v2Stores/{hl7v2_store_id}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ExportMessagesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1NameGetFHIRStoreMetricsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}:getFHIRStoreMetrics',
  tags: ['projects'],
  description: 'Gets metrics associated with the FHIR store.',
  operationId: 'healthcare.projects.locations.datasets.fhirStores.getFHIRStoreMetrics',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The resource name of the FHIR store to get metrics for.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FhirStoreMetricsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1NameImportRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:import',
  tags: ['projects'],
  description:
    'Import messages to the HL7v2 store by loading data from the specified sources. This method is optimized to load large quantities of data using import semantics that ignore some HL7v2 store configuration options and are not suitable for all use cases. It is primarily intended to load data into an empty HL7v2 store that is not being used by other clients. An existing message will be overwritten if a duplicate message is imported. A duplicate message is a message with the same raw bytes as a message that already exists in this HL7v2 store. When a message is overwritten, its labels will also be overwritten. The import operation is idempotent unless the input data contains multiple valid messages with the same raw bytes but different labels. In that case, after the import completes, the store contains exactly one message with those raw bytes but there is no ordering guarantee on which version of the labels it has. The operation result counters do not count duplicated raw bytes as an error and count one success for each message in the input, which might result in a success count larger than the number of messages in the HL7v2 store. If some messages fail to import, for example due to parsing errors, successfully imported messages are not rolled back. This method returns an Operation that can be used to track the status of the import by calling GetOperation. Immediate fatal errors appear in the error field, errors are also logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)). Otherwise, when the operation finishes, a response of type ImportMessagesResponse is returned in the response field. The metadata field type for this operation is OperationMetadata.',
  operationId: 'healthcare.projects.locations.datasets.hl7V2Stores.import',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the target HL7v2 store, in the format `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/hl7v2Stores/{hl7v2_store_id}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ImportMessagesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1NameListRevisionsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}:listRevisions',
  tags: ['projects'],
  description: 'Lists the revisions of the specified Consent in reverse chronological order.',
  operationId: 'healthcare.projects.locations.datasets.consentStores.consents.listRevisions',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Restricts the revisions returned to those matching a filter. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in `yyyy-mm-dd` form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it\'s just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. Fields/functions available for filtering are: - user_id. For example, `filter=\'user_id="user123"\'`. - consent_artifact - state - revision_create_time - metadata. For example, `filter=Metadata(\\"testkey\\")=\\"value\\"` or `filter=HasMetadata(\\"testkey\\")`.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Limit on the number of revisions to return in a single response. If not specified, 100 is used. May not be larger than 1000.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Token to retrieve the next page of results or empty if there are no more results in the list.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. The resource name of the Consent to retrieve revisions for.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListConsentRevisionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1NameRejectRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:reject',
  tags: ['projects'],
  description:
    'Rejects the latest revision of the specified Consent by committing a new revision with `state` updated to `REJECTED`. If the latest revision of the specified Consent is in the `REJECTED` state, no new revision is committed. A FAILED_PRECONDITION error occurs if the latest revision of the specified Consent is in the `ACTIVE` or `REVOKED` state.',
  operationId: 'healthcare.projects.locations.datasets.consentStores.consents.reject',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the Consent to reject, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consents/{consent_id}`. An INVALID_ARGUMENT error occurs if `revision_id` is specified in the name.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RejectConsentRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ConsentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1NameRevokeRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:revoke',
  tags: ['projects'],
  description:
    'Revokes the latest revision of the specified Consent by committing a new revision with `state` updated to `REVOKED`. If the latest revision of the specified Consent is in the `REVOKED` state, no new revision is committed. A FAILED_PRECONDITION error occurs if the latest revision of the given consent is in `DRAFT` or `REJECTED` state.',
  operationId: 'healthcare.projects.locations.datasets.consentStores.consents.revoke',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the Consent to revoke, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consents/{consent_id}`. An INVALID_ARGUMENT error occurs if `revision_id` is specified in the name.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RevokeConsentRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ConsentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1NlpServiceAnalyzeEntitiesRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{nlpService}:analyzeEntities',
  tags: ['projects'],
  description:
    'Analyze heathcare entity in a document. Its response includes the recognized entity mentions and the relationships between them. AnalyzeEntities uses context aware models to detect entities. This method can only analyze documents written in English.',
  operationId: 'healthcare.projects.locations.services.nlp.analyzeEntities',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      nlpService: z
        .string()
        .openapi({
          param: {
            description:
              'The resource name of the service of the form: "projects/{project_id}/locations/{location_id}/services/nlp".',
            in: 'path',
            name: 'nlpService',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AnalyzeEntitiesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AnalyzeEntitiesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentAnnotationStoresRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/annotationStores',
  tags: ['projects'],
  description: 'Lists the Annotation stores in the given dataset for a source store.',
  operationId: 'healthcare.projects.locations.datasets.annotationStores.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Restricts stores returned to those matching a filter. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in `yyyy-mm-dd` form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it\'s just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. Only filtering on labels is supported, for example `labels.key=value`.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit on the number of Annotation stores to return in a single response. If not specified, 100 is used. May not be larger than 1000.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The next_page_token value returned from the previous List request, if any.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Name of the dataset.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListAnnotationStoresResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentAnnotationStoresRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/annotationStores',
  tags: ['projects'],
  description: 'Creates a new Annotation store within the parent dataset.',
  operationId: 'healthcare.projects.locations.datasets.annotationStores.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      annotationStoreId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The ID of the Annotation store that is being created. The string must match the following regex: `[\\p{L}\\p{N}_\\-\\.]{1,256}`.',
            in: 'query',
            name: 'annotationStoreId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'The name of the dataset this Annotation store belongs to.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AnnotationStoreSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AnnotationStoreSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentAnnotationsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/annotations',
  tags: ['projects'],
  description: 'Lists the Annotations in the given Annotation store for a source resource.',
  operationId: 'healthcare.projects.locations.datasets.annotationStores.annotations.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Restricts Annotations returned to those matching a filter. Functions available for filtering are: - `matches("annotation_source.cloud_healthcare_source.name", substring)`. Filter on `cloud_healthcare_source.name`. For example: `matches("annotation_source.cloud_healthcare_source.name", "some source")`. - `matches("annotation", substring)`. Filter on all fields of annotation. For example: `matches("annotation", "some-content")`. - `type("text")`, `type("image")`, `type("resource")`. Filter on the type of annotation `data`.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit on the number of Annotations to return in a single response. If not specified, 100 is used. May not be larger than 1000.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The next_page_token value returned from the previous List request, if any.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      view: z
        .enum(['ANNOTATION_VIEW_UNSPECIFIED', 'ANNOTATION_VIEW_BASIC', 'ANNOTATION_VIEW_FULL'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Controls which fields are populated in the response.',
            in: 'query',
            name: 'view',
            schema: {
              enum: [
                'ANNOTATION_VIEW_UNSPECIFIED',
                'ANNOTATION_VIEW_BASIC',
                'ANNOTATION_VIEW_FULL',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Name of the Annotation store to retrieve Annotations from.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListAnnotationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentAnnotationsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/annotations',
  tags: ['projects'],
  description:
    'Creates a new Annotation record. It is valid to create Annotation objects for the same source more than once since a unique ID is assigned to each record by this service.',
  operationId: 'healthcare.projects.locations.datasets.annotationStores.annotations.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the Annotation store this annotation belongs to. For example, `projects/my-project/locations/us-central1/datasets/mydataset/annotationStores/myannotationstore`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AnnotationSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AnnotationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentAttributeDefinitionsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/attributeDefinitions',
  tags: ['projects'],
  description: 'Lists the Attribute definitions in the specified consent store.',
  operationId: 'healthcare.projects.locations.datasets.consentStores.attributeDefinitions.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Restricts the attributes returned to those matching a filter. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in `yyyy-mm-dd` form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it\'s just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. The only field available for filtering is `category`. For example, `filter=category=\\"REQUEST\\"`.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Limit on the number of Attribute definitions to return in a single response. If not specified, 100 is used. May not be larger than 1000.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Token to retrieve the next page of results or empty to get the first page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Name of the consent store to retrieve Attribute definitions from.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListAttributeDefinitionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentAttributeDefinitionsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/attributeDefinitions',
  tags: ['projects'],
  description: 'Creates a new Attribute definition in the parent consent store.',
  operationId: 'healthcare.projects.locations.datasets.consentStores.attributeDefinitions.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      attributeDefinitionId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The ID of the Attribute definition to create. The string must match the following regex: `_a-zA-Z{0,255}` and must not be a reserved keyword within the Common Expression Language as listed on https://github.com/google/cel-spec/blob/master/doc/langdef.md.',
            in: 'query',
            name: 'attributeDefinitionId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the consent store that this Attribute definition belongs to.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AttributeDefinitionSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AttributeDefinitionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentConsentArtifactsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/consentArtifacts',
  tags: ['projects'],
  description: 'Lists the Consent artifacts in the specified consent store.',
  operationId: 'healthcare.projects.locations.datasets.consentStores.consentArtifacts.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Restricts the artifacts returned to those matching a filter. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in `yyyy-mm-dd` form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it\'s just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. The fields available for filtering are: - user_id. For example, `filter=user_id=\\"user123\\"`. - consent_content_version - metadata. For example, `filter=Metadata(\\"testkey\\")=\\"value\\"` or `filter=HasMetadata(\\"testkey\\")`.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Limit on the number of consent artifacts to return in a single response. If not specified, 100 is used. May not be larger than 1000.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The next_page_token value returned from the previous List request, if any.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. Name of the consent store to retrieve consent artifacts from.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListConsentArtifactsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentConsentArtifactsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/consentArtifacts',
  tags: ['projects'],
  description: 'Creates a new Consent artifact in the parent consent store.',
  operationId: 'healthcare.projects.locations.datasets.consentStores.consentArtifacts.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the consent store this Consent artifact belongs to.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ConsentArtifactSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ConsentArtifactSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentConsentStoresRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/consentStores',
  tags: ['projects'],
  description: 'Lists the consent stores in the specified dataset.',
  operationId: 'healthcare.projects.locations.datasets.consentStores.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Restricts the stores returned to those matching a filter. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in `yyyy-mm-dd` form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it\'s just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. Only filtering on labels is supported. For example, `filter=labels.key=value`.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Limit on the number of consent stores to return in a single response. If not specified, 100 is used. May not be larger than 1000.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Token to retrieve the next page of results, or empty to get the first page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. Name of the dataset.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListConsentStoresResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentConsentStoresRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/consentStores',
  tags: ['projects'],
  description:
    'Creates a new consent store in the parent dataset. Attempting to create a consent store with the same ID as an existing store fails with an ALREADY_EXISTS error.',
  operationId: 'healthcare.projects.locations.datasets.consentStores.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      consentStoreId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The ID of the consent store to create. The string must match the following regex: `[\\p{L}\\p{N}_\\-\\.]{1,256}`. Cannot be changed after creation.',
            in: 'query',
            name: 'consentStoreId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The name of the dataset this consent store belongs to.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ConsentStoreSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ConsentStoreSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentConsentsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/consents',
  tags: ['projects'],
  description:
    "Lists the Consent in the given consent store, returning each Consent's latest revision.",
  operationId: 'healthcare.projects.locations.datasets.consentStores.consents.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Restricts the consents returned to those matching a filter. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in `yyyy-mm-dd` form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it\'s just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. The fields available for filtering are: - user_id. For example, `filter=\'user_id="user123"\'`. - consent_artifact - state - revision_create_time - metadata. For example, `filter=Metadata(\\"testkey\\")=\\"value\\"` or `filter=HasMetadata(\\"testkey\\")`.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Limit on the number of Consents to return in a single response. If not specified, 100 is used. May not be larger than 1000.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The next_page_token value returned from the previous List request, if any.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. Name of the consent store to retrieve Consents from.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListConsentsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentConsentsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/consents',
  tags: ['projects'],
  description: 'Creates a new Consent in the parent consent store.',
  operationId: 'healthcare.projects.locations.datasets.consentStores.consents.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. Name of the consent store.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ConsentSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ConsentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentDatasetsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/datasets',
  tags: ['projects'],
  description: 'Lists the health datasets in the current project.',
  operationId: 'healthcare.projects.locations.datasets.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of items to return. If not specified, 100 is used. May not be larger than 1000.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The next_page_token value returned from a previous List request, if any.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the project whose datasets should be listed. For example, `projects/{project_id}/locations/{location_id}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListDatasetsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentDatasetsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/datasets',
  tags: ['projects'],
  description:
    'Creates a new health dataset. Results are returned through the Operation interface which returns either an `Operation.response` which contains a Dataset or `Operation.error`. The metadata field type is OperationMetadata.',
  operationId: 'healthcare.projects.locations.datasets.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      datasetId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The ID of the dataset that is being created. The string must match the following regex: `[\\p{L}\\p{N}_\\-\\.]{1,256}`.',
            in: 'query',
            name: 'datasetId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the project where the server creates the dataset. For example, `projects/{project_id}/locations/{location_id}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DatasetSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentDicomStoresRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/dicomStores',
  tags: ['projects'],
  description: 'Lists the DICOM stores in the given dataset.',
  operationId: 'healthcare.projects.locations.datasets.dicomStores.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Restricts stores returned to those matching a filter. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in `yyyy-mm-dd` form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it\'s just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. Only filtering on labels is supported. For example, `labels.key=value`.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit on the number of DICOM stores to return in a single response. If not specified, 100 is used. May not be larger than 1000.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The next_page_token value returned from the previous List request, if any.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Name of the dataset.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListDicomStoresResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentDicomStoresRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/dicomStores',
  tags: ['projects'],
  description: 'Creates a new DICOM store within the parent dataset.',
  operationId: 'healthcare.projects.locations.datasets.dicomStores.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      dicomStoreId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The ID of the DICOM store that is being created. Any string value up to 256 characters in length.',
            in: 'query',
            name: 'dicomStoreId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'The name of the dataset this DICOM store belongs to.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DicomStoreSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DicomStoreSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentDicomWebDicomWebPathRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/dicomWeb/{dicomWebPath}',
  tags: ['projects'],
  description:
    'RetrieveRenderedFrames returns instances associated with the given study, series, SOP Instance UID and frame numbers in an acceptable Rendered Media Type. See [RetrieveTransaction](http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4). For details on the implementation of RetrieveRenderedFrames, see [Rendered resources](https://cloud.google.com/healthcare/docs/dicom#rendered_resources) in the Cloud Healthcare API conformance statement. For samples that show how to call RetrieveRenderedFrames, see [Retrieving consumer image formats](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#retrieving_consumer_image_formats).',
  operationId:
    'healthcare.projects.locations.datasets.dicomStores.studies.series.instances.frames.retrieveRendered',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
      dicomWebPath: z
        .string()
        .openapi({
          param: {
            description:
              'The path of the RetrieveRenderedFrames DICOMweb request. For example, `studies/{study_uid}/series/{series_uid}/instances/{instance_uid}/frames/{frame_list}/rendered`.',
            in: 'path',
            name: 'dicomWebPath',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: HttpBodySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentDicomWebDicomWebPathRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/dicomWeb/{dicomWebPath}',
  tags: ['projects'],
  description:
    'StoreInstances stores DICOM instances associated with study instance unique identifiers (SUID). See [Store Transaction](http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.5). For details on the implementation of StoreInstances, see [Store transaction](https://cloud.google.com/healthcare/docs/dicom#store_transaction) in the Cloud Healthcare API conformance statement. For samples that show how to call StoreInstances, see [Storing DICOM data](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#storing_dicom_data).',
  operationId: 'healthcare.projects.locations.datasets.dicomStores.studies.storeInstances',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
      dicomWebPath: z
        .string()
        .openapi({
          param: {
            description:
              'The path of the StoreInstances DICOMweb request. For example, `studies/[{study_uid}]`. Note that the `study_uid` is optional.',
            in: 'path',
            name: 'dicomWebPath',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: HttpBodySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: HttpBodySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV1beta1ParentDicomWebDicomWebPathRoute = createRoute({
  method: 'delete',
  path: '/v1beta1/{parent}/dicomWeb/{dicomWebPath}',
  tags: ['projects'],
  description:
    'DeleteInstance deletes an instance associated with the given study, series, and SOP Instance UID. Delete requests are equivalent to the GET requests specified in the Retrieve transaction. Study and series search results can take a few seconds to be updated after an instance is deleted using DeleteInstance. For samples that show how to call DeleteInstance, see [Deleting a study, series, or instance](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#deleting_a_study_series_or_instance).',
  operationId: 'healthcare.projects.locations.datasets.dicomStores.studies.series.instances.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
      dicomWebPath: z
        .string()
        .openapi({
          param: {
            description:
              'The path of the DeleteInstance request. For example, `studies/{study_uid}/series/{series_uid}/instances/{instance_uid}`.',
            in: 'path',
            name: 'dicomWebPath',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentFhirRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/fhir',
  tags: ['projects'],
  description:
    'Executes all the requests in the given Bundle. Implements the FHIR standard batch/transaction interaction ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/http.html#transaction), [STU3](https://hl7.org/implement/standards/fhir/STU3/http.html#transaction), [R4](https://hl7.org/implement/standards/fhir/R4/http.html#transaction)). Supports all interactions within a bundle, except search. This method accepts Bundles of type `batch` and `transaction`, processing them according to the batch processing rules ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/http.html#2.1.0.16.1), [STU3](https://hl7.org/implement/standards/fhir/STU3/http.html#2.21.0.17.1), [R4](https://hl7.org/implement/standards/fhir/R4/http.html#brules)) and transaction processing rules ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/http.html#2.1.0.16.2), [STU3](https://hl7.org/implement/standards/fhir/STU3/http.html#2.21.0.17.2), [R4](https://hl7.org/implement/standards/fhir/R4/http.html#trules)). The request body must contain a JSON-encoded FHIR `Bundle` resource, and the request headers must contain `Content-Type: application/fhir+json`. For a batch bundle or a successful transaction, the response body contains a JSON-encoded representation of a `Bundle` resource of type `batch-response` or `transaction-response` containing one entry for each entry in the request, with the outcome of processing the entry. In the case of an error for a transaction bundle, the response body contains a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. This method checks permissions for each request in the bundle. The `executeBundle` permission is required to call this method, but you must also grant sufficient permissions to execute the individual requests in the bundle. For example, if the bundle contains a request to create a FHIR resource, the caller must also have been granted the `healthcare.fhirResources.create` permission. You can use audit logs to view the permissions for `executeBundle` and each request in the bundle. For more information, see [Viewing Cloud Audit logs](https://cloud.google.com/healthcare-api/docs/how-tos/audit-logging). For samples that show how to call `executeBundle`, see [Managing FHIR resources using FHIR bundles](https://cloud.google.com/healthcare/docs/how-tos/fhir-bundles).',
  operationId: 'healthcare.projects.locations.datasets.fhirStores.fhir.executeBundle',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Name of the FHIR store in which this bundle will be executed.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: HttpBodySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: HttpBodySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentFhirReferencesRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/fhir/$references',
  tags: ['projects'],
  description:
    'Gets all incoming references to a given target FHIR resource. Can also get all incoming references when the target resource does not exist, for example, if the target has been deleted. On success, the response body contains a Bundle with type `searchset`, where each entry in the Bundle contains the full content of the resource. If the operation fails, an `OperationOutcome` is returned describing the failure. If the request cannot be mapped to a valid API method on a FHIR store, a generic Google Cloud error might be returned instead.',
  operationId:
    'healthcare.projects.locations.datasets.fhirStores.fhir.Resource-incoming-references',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      _count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Maximum number of resources in a page. If not specified, 100 is used. May not be larger than 1000.',
            in: 'query',
            name: '_count',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      _page_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used to retrieve the next page of results when using pagination. Set `_page_token` to the value of _page_token set in next page links\' url. Next page are returned in the response bundle\'s links field, where `link.relation` is "next". Omit `_page_token` if no previous request has been made.',
            in: 'query',
            name: '_page_token',
            schema: { type: 'string' },
            required: false,
          },
        }),
      _summary: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used to simplify the representation of the returned resources. `_summary=text` returns only the `text`, `id`, and `meta` top-level fields. `_summary=data` removes the `text` field and returns all other fields. `_summary=false` returns all parts of the resource(s). Either not providing this parameter or providing an empty value to this parameter also returns all parts of the resource(s).',
            in: 'query',
            name: '_summary',
            schema: { type: 'string' },
            required: false,
          },
        }),
      _type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'String of comma-delimited FHIR resource types. If provided, only resources of the specified resource type(s) are returned. If not provided or an empty value is provided, no filter on the returned resource type(s) is applied.',
            in: 'query',
            name: '_type',
            schema: { type: 'string' },
            required: false,
          },
        }),
      target: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The target whose incoming references are requested. This param is required and must not be empty. It uses the format "ResourceType/ResourceID", for example, target=ResourceType/ResourceID.',
            in: 'query',
            name: 'target',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The name of the FHIR store that holds the target resource.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: HttpBodySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentFhirConceptMapTranslateRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/fhir/ConceptMap/$translate',
  tags: ['projects'],
  description:
    'Translates a code from one value set to another by searching for appropriate concept maps. Implements the FHIR standard $translate operation ([DSTU2](https://www.hl7.org/fhir/DSTU2/operation-conceptmap-translate.html), [STU3](https://www.hl7.org/fhir/STU3/operation-conceptmap-translate.html), [R4](https://www.hl7.org/fhir/R4/operation-conceptmap-translate.html)). On success, the response body contains a JSON-encoded representation of a FHIR Parameters resource, which includes the translation result. Errors generated by the FHIR store contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead.',
  operationId: 'healthcare.projects.locations.datasets.fhirStores.fhir.ConceptMap-search-translate',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      code: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The code to translate.',
            in: 'query',
            name: 'code',
            schema: { type: 'string' },
            required: false,
          },
        }),
      conceptMapVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The version of the concept map to use. If unset, the most current version is used.',
            in: 'query',
            name: 'conceptMapVersion',
            schema: { type: 'string' },
            required: false,
          },
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The source value set of the concept map to be used. If unset, target is used to search for concept maps.',
            in: 'query',
            name: 'source',
            schema: { type: 'string' },
            required: false,
          },
        }),
      system: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The system for the code to be translated.',
            in: 'query',
            name: 'system',
            schema: { type: 'string' },
            required: false,
          },
        }),
      target: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The target value set of the concept map to be used. If unset, source is used to search for concept maps.',
            in: 'query',
            name: 'target',
            schema: { type: 'string' },
            required: false,
          },
        }),
      url: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The canonical url of the concept map to use. If unset, the source and target is used to search for concept maps.',
            in: 'query',
            name: 'url',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'The name for the FHIR store containing the concept map(s) to use for the translation.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: HttpBodySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentFhirObservationLastnRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/fhir/Observation/$lastn',
  tags: ['projects'],
  description:
    "Retrieves the N most recent `Observation` resources for a subject matching search criteria specified as query parameters, grouped by `Observation.code`, sorted from most recent to oldest. Implements the FHIR extended operation Observation-lastn ([STU3](https://hl7.org/implement/standards/fhir/STU3/observation-operations.html#lastn), [R4](https://hl7.org/implement/standards/fhir/R4/observation-operations.html#lastn)). DSTU2 doesn't define the Observation-lastn method, but the server supports it the same way it supports STU3. Search terms are provided as query parameters following the same pattern as the search method. The following search parameters must be provided: - `subject` or `patient` to specify a subject for the Observation. - `code`, `category` or any of the composite parameters that include `code`. Any other valid Observation search parameters can also be provided. This operation accepts an additional query parameter `max`, which specifies N, the maximum number of Observations to return from each group, with a default of 1. Searches with over 1000 results are rejected. Results are counted before grouping and limiting the results with `max`. To stay within the limit, constrain these searches using Observation search parameters such as `_lastUpdated` or `date`. On success, the response body contains a JSON-encoded representation of a `Bundle` resource of type `searchset`, containing the results of the operation. Errors generated by the FHIR store contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead.",
  operationId: 'healthcare.projects.locations.datasets.fhirStores.fhir.Observation-lastn',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Name of the FHIR store to retrieve resources from.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: HttpBodySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentFhirSearchRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/fhir/_search',
  tags: ['projects'],
  description:
    'Searches for resources in the given FHIR store according to criteria specified as query parameters. Implements the FHIR standard search interaction ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/http.html#search), [STU3](https://hl7.org/implement/standards/fhir/STU3/http.html#search), [R4](https://hl7.org/implement/standards/fhir/R4/http.html#search)) using the search semantics described in the FHIR Search specification ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/search.html), [STU3](https://hl7.org/implement/standards/fhir/STU3/search.html), [R4](https://hl7.org/implement/standards/fhir/R4/search.html)). Supports four methods of search defined by the specification: * `GET [base]?[parameters]` to search across all resources. * `GET [base]/[type]?[parameters]` to search resources of a specified type. * `POST [base]/_search?[parameters]` as an alternate form having the same semantics as the `GET` method across all resources. * `POST [base]/[type]/_search?[parameters]` as an alternate form having the same semantics as the `GET` method for the specified type. The `GET` and `POST` methods do not support compartment searches. The `POST` method does not support `application/x-www-form-urlencoded` search parameters. On success, the response body contains a JSON-encoded representation of a `Bundle` resource of type `searchset`, containing the results of the search. Errors generated by the FHIR store contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. The server\'s capability statement, retrieved through capabilities, indicates what search parameters are supported on each FHIR resource. A list of all search parameters defined by the specification can be found in the FHIR Search Parameter Registry ([STU3](https://hl7.org/implement/standards/fhir/STU3/searchparameter-registry.html), [R4](https://hl7.org/implement/standards/fhir/R4/searchparameter-registry.html)). FHIR search parameters for DSTU2 can be found on each resource\'s definition page. Supported search modifiers: `:missing`, `:exact`, `:contains`, `:text`, `:in`, `:not-in`, `:above`, `:below`, `:[type]`, `:not`, and `recurse` (DSTU2 and STU3) or `:iterate` (R4). Supported search result parameters: `_sort`, `_count`, `_include`, `_revinclude`, `_summary=text`, `_summary=data`, and `_elements`. The maximum number of search results returned defaults to 100, which can be overridden by the `_count` parameter up to a maximum limit of 1000. The server might return fewer resources than requested to prevent excessively large responses. If there are additional results, the returned `Bundle` contains a link of `relation` "next", which has a `_page_token` parameter for an opaque pagination token that can be used to retrieve the next page. Resources with a total size larger than 5MB or a field count larger than 50,000 might not be fully searchable as the server might trim its generated search index in those cases. Note: FHIR resources are indexed asynchronously, so there might be a slight delay between the time a resource is created or changes and when the change is reflected in search results. For samples and detailed information, see [Searching for FHIR resources](https://cloud.google.com/healthcare/docs/how-tos/fhir-search) and [Advanced FHIR search features](https://cloud.google.com/healthcare/docs/how-tos/fhir-advanced-search).',
  operationId: 'healthcare.projects.locations.datasets.fhirStores.fhir.search',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Name of the FHIR store to retrieve resources from.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SearchResourcesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: HttpBodySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentFhirResourceTypeSearchRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/fhir/{resourceType}/_search',
  tags: ['projects'],
  description:
    'Searches for resources in the given FHIR store according to criteria specified as query parameters. Implements the FHIR standard search interaction ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/http.html#search), [STU3](https://hl7.org/implement/standards/fhir/STU3/http.html#search), [R4](https://hl7.org/implement/standards/fhir/R4/http.html#search)) using the search semantics described in the FHIR Search specification ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/search.html), [STU3](https://hl7.org/implement/standards/fhir/STU3/search.html), [R4](https://hl7.org/implement/standards/fhir/R4/search.html)). Supports four methods of search defined by the specification: * `GET [base]?[parameters]` to search across all resources. * `GET [base]/[type]?[parameters]` to search resources of a specified type. * `POST [base]/_search?[parameters]` as an alternate form having the same semantics as the `GET` method across all resources. * `POST [base]/[type]/_search?[parameters]` as an alternate form having the same semantics as the `GET` method for the specified type. The `GET` and `POST` methods do not support compartment searches. The `POST` method does not support `application/x-www-form-urlencoded` search parameters. On success, the response body contains a JSON-encoded representation of a `Bundle` resource of type `searchset`, containing the results of the search. Errors generated by the FHIR store contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. The server\'s capability statement, retrieved through capabilities, indicates what search parameters are supported on each FHIR resource. A list of all search parameters defined by the specification can be found in the FHIR Search Parameter Registry ([STU3](https://hl7.org/implement/standards/fhir/STU3/searchparameter-registry.html), [R4](https://hl7.org/implement/standards/fhir/R4/searchparameter-registry.html)). FHIR search parameters for DSTU2 can be found on each resource\'s definition page. Supported search modifiers: `:missing`, `:exact`, `:contains`, `:text`, `:in`, `:not-in`, `:above`, `:below`, `:[type]`, `:not`, and `recurse` (DSTU2 and STU3) or `:iterate` (R4). Supported search result parameters: `_sort`, `_count`, `_include`, `_revinclude`, `_summary=text`, `_summary=data`, and `_elements`. The maximum number of search results returned defaults to 100, which can be overridden by the `_count` parameter up to a maximum limit of 1000. The server might return fewer resources than requested to prevent excessively large responses. If there are additional results, the returned `Bundle` contains a link of `relation` "next", which has a `_page_token` parameter for an opaque pagination token that can be used to retrieve the next page. Resources with a total size larger than 5MB or a field count larger than 50,000 might not be fully searchable as the server might trim its generated search index in those cases. Note: FHIR resources are indexed asynchronously, so there might be a slight delay between the time a resource is created or changes and when the change is reflected in search results. For samples and detailed information, see [Searching for FHIR resources](https://cloud.google.com/healthcare/docs/how-tos/fhir-search) and [Advanced FHIR search features](https://cloud.google.com/healthcare/docs/how-tos/fhir-advanced-search).',
  operationId: 'healthcare.projects.locations.datasets.fhirStores.fhir.search-type',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Name of the FHIR store to retrieve resources from.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
      resourceType: z
        .string()
        .openapi({
          param: {
            description:
              'The FHIR resource type to search, such as Patient or Observation. For a complete list, see the FHIR Resource Index ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html), [STU3](https://hl7.org/implement/standards/fhir/STU3/resourcelist.html), [R4](https://hl7.org/implement/standards/fhir/R4/resourcelist.html)).',
            in: 'path',
            name: 'resourceType',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SearchResourcesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: HttpBodySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const putV1beta1ParentFhirTypeRoute = createRoute({
  method: 'put',
  path: '/v1beta1/{parent}/fhir/{type}',
  tags: ['projects'],
  description:
    'If a resource is found based on the search criteria specified in the query parameters, updates the entire contents of that resource. Implements the FHIR standard conditional update interaction ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/http.html#2.1.0.10.2), [STU3](https://hl7.org/implement/standards/fhir/STU3/http.html#cond-update), [R4](https://hl7.org/implement/standards/fhir/R4/http.html#cond-update)). Search terms are provided as query parameters following the same pattern as the search method. If the search criteria identify more than one match, the request returns a `412 Precondition Failed` error. If the search criteria identify zero matches, and the supplied resource body contains an `id`, and the FHIR store has enable_update_create set, creates the resource with the client-specified ID. It is strongly advised not to include or encode any sensitive data such as patient identifiers in client-specified resource IDs. Those IDs are part of the FHIR resource path recorded in Cloud Audit Logs and Pub/Sub notifications. Those IDs can also be contained in reference fields within other resources. If the search criteria identify zero matches, and the supplied resource body does not contain an `id`, the resource is created with a server-assigned ID as per the create method. The request body must contain a JSON-encoded FHIR resource, and the request headers must contain `Content-Type: application/fhir+json`. On success, the response body contains a JSON-encoded representation of the updated resource, including the server-assigned version ID. Errors generated by the FHIR store contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. This method requires the`healthcare.fhirStores.searchResources` and `healthcare.fhirResources.update` permissions on the parent FHIR store. For samples that show how to call `conditionalUpdate`, see [Conditionally updating a FHIR resource](https://cloud.google.com/healthcare/docs/how-tos/fhir-resources#conditionally_updating_a_fhir_resource).',
  operationId: 'healthcare.projects.locations.datasets.fhirStores.fhir.conditionalUpdate',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'The name of the FHIR store this resource belongs to.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: z
        .string()
        .openapi({
          param: {
            description:
              'The FHIR resource type to update, such as Patient or Observation. For a complete list, see the FHIR Resource Index ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html), [STU3](https://hl7.org/implement/standards/fhir/STU3/resourcelist.html), [R4](https://hl7.org/implement/standards/fhir/R4/resourcelist.html)). Must match the resource type in the provided content.',
            in: 'path',
            name: 'type',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: HttpBodySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: HttpBodySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentFhirTypeRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/fhir/{type}',
  tags: ['projects'],
  description:
    'Creates a FHIR resource. Implements the FHIR standard create interaction ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/http.html#create), [STU3](https://hl7.org/implement/standards/fhir/STU3/http.html#create), [R4](https://hl7.org/implement/standards/fhir/R4/http.html#create)), which creates a new resource with a server-assigned resource ID. Also supports the FHIR standard conditional create interaction ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/http.html#ccreate), [STU3](https://hl7.org/implement/standards/fhir/STU3/http.html#ccreate), [R4](https://hl7.org/implement/standards/fhir/R4/http.html#ccreate)), specified by supplying an `If-None-Exist` header containing a FHIR search query. If no resources match this search query, the server processes the create operation as normal. The request body must contain a JSON-encoded FHIR resource, and the request headers must contain `Content-Type: application/fhir+json`. On success, the response body contains a JSON-encoded representation of the resource as it was created on the server, including the server-assigned resource ID and version ID. Errors generated by the FHIR store contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. For samples that show how to call `create`, see [Creating a FHIR resource](https://cloud.google.com/healthcare/docs/how-tos/fhir-resources#creating_a_fhir_resource).',
  operationId: 'healthcare.projects.locations.datasets.fhirStores.fhir.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'The name of the FHIR store this resource belongs to.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: z
        .string()
        .openapi({
          param: {
            description:
              'The FHIR resource type to create, such as Patient or Observation. For a complete list, see the FHIR Resource Index ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html), [STU3](https://hl7.org/implement/standards/fhir/STU3/resourcelist.html), [R4](https://hl7.org/implement/standards/fhir/R4/resourcelist.html)). Must match the resource type in the provided content.',
            in: 'path',
            name: 'type',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: HttpBodySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: HttpBodySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV1beta1ParentFhirTypeRoute = createRoute({
  method: 'delete',
  path: '/v1beta1/{parent}/fhir/{type}',
  tags: ['projects'],
  description:
    'Deletes FHIR resources that match a search query. Implements the FHIR standard conditional delete interaction ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/http.html#2.1.0.12.1), [STU3](https://hl7.org/implement/standards/fhir/STU3/http.html#2.21.0.13.1), [R4](https://hl7.org/implement/standards/fhir/R4/http.html#3.1.0.7.1)). If multiple resources match, all matching resources are deleted. Search terms are provided as query parameters following the same pattern as the search method. Not all FHIR resources that match the search query might be deleted because, by default, a maximum of 100 FHIR resources can be deleted. The number of FHIR resources that can be deleted depends on the page size of the returned resources, which you can control using the `_count` query parameter. Even when using `_count`, you can delete a maximum 1,000 FHIR resources per each call of `conditionalDelete`. Note: Unless resource versioning is disabled by setting the disable_resource_versioning flag on the FHIR store, the deleted resources are moved to a history repository that can still be retrieved through vread and related methods, unless they are removed by the purge method. This method requires the`healthcare.fhirStores.searchResources` and `healthcare.fhirResources.delete` permissions on the parent FHIR store. For samples that show how to call `conditionalDelete`, see [Conditionally deleting a FHIR resource](https://cloud.google.com/healthcare/docs/how-tos/fhir-resources#conditionally_deleting_a_fhir_resource).',
  operationId: 'healthcare.projects.locations.datasets.fhirStores.fhir.conditionalDelete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'The name of the FHIR store this resource belongs to.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: z
        .string()
        .openapi({
          param: {
            description:
              'The FHIR resource type to delete, such as Patient or Observation. For a complete list, see the FHIR Resource Index ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html), [STU3](https://hl7.org/implement/standards/fhir/STU3/resourcelist.html), [R4](https://hl7.org/implement/standards/fhir/R4/resourcelist.html)).',
            in: 'path',
            name: 'type',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const patchV1beta1ParentFhirTypeRoute = createRoute({
  method: 'patch',
  path: '/v1beta1/{parent}/fhir/{type}',
  tags: ['projects'],
  description:
    "If a resource is found based on the search criteria specified in the query parameters, updates part of that resource by applying the operations specified in a [JSON Patch](http://jsonpatch.com/) document. Implements the FHIR standard conditional patch interaction ([STU3](https://hl7.org/implement/standards/fhir/STU3/http.html#patch), [R4](https://hl7.org/implement/standards/fhir/R4/http.html#patch)). DSTU2 doesn't define a conditional patch method, but the server supports it in the same way it supports STU3. Search terms are provided as query parameters following the same pattern as the search method. If the search criteria identify more than one match, the request returns a `412 Precondition Failed` error. The request body must contain a JSON Patch document, and the request headers must contain `Content-Type: application/json-patch+json`. On success, the response body contains a JSON-encoded representation of the updated resource, including the server-assigned version ID. Errors generated by the FHIR store contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. This method requires the`healthcare.fhirStores.searchResources` permission on the parent FHIR store and the `healthcare.fhirResources.patch` permission on the requested FHIR store resource. For samples that show how to call `conditionalPatch`, see [Conditionally patching a FHIR resource](https://cloud.google.com/healthcare/docs/how-tos/fhir-resources#conditionally_patching_a_fhir_resource).",
  operationId: 'healthcare.projects.locations.datasets.fhirStores.fhir.conditionalPatch',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'The name of the FHIR store this resource belongs to.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: z
        .string()
        .openapi({
          param: {
            description:
              'The FHIR resource type to update, such as Patient or Observation. For a complete list, see the FHIR Resource Index ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html), [STU3](https://hl7.org/implement/standards/fhir/STU3/resourcelist.html), [R4](https://hl7.org/implement/standards/fhir/R4/resourcelist.html)).',
            in: 'path',
            name: 'type',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: HttpBodySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: HttpBodySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentFhirTypeValidateRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/fhir/{type}/$validate',
  tags: ['projects'],
  description:
    "Validates an input FHIR resource's conformance to its profiles and the profiles configured on the FHIR store. Implements the FHIR extended operation $validate ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/resource-operations.html#validate), [STU3](http://hl7.org/implement/standards/fhir/STU3/resource-operations.html#validate), or [R4](http://hl7.org/implement/standards/fhir/R4/resource-operation-validate.html)). The request body must contain a JSON-encoded FHIR resource, and the request headers must contain `Content-Type: application/fhir+json`. The `Parameters` input syntax is not supported. The `profile` query parameter can be used to request that the resource only be validated against a specific profile. If a profile with the given URL cannot be found in the FHIR store then an error is returned. Errors generated by validation contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead.",
  operationId: 'healthcare.projects.locations.datasets.fhirStores.fhir.Resource-validate',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      profile: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The canonical URL of a profile that this resource should be validated against. For example, to validate a Patient resource against the US Core Patient profile this parameter would be `http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient`. A StructureDefinition with this canonical URL must exist in the FHIR store.',
            in: 'query',
            name: 'profile',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the FHIR store that holds the profiles being used for validation.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: z
        .string()
        .openapi({
          param: {
            description:
              'The FHIR resource type of the resource being validated. For a complete list, see the FHIR Resource Index ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html), [STU3](http://hl7.org/implement/standards/fhir/STU3/resourcelist.html), or [R4](http://hl7.org/implement/standards/fhir/R4/resourcelist.html)). Must match the resource type in the provided content.',
            in: 'path',
            name: 'type',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: HttpBodySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: HttpBodySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentFhirStoresRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/fhirStores',
  tags: ['projects'],
  description: 'Lists the FHIR stores in the given dataset.',
  operationId: 'healthcare.projects.locations.datasets.fhirStores.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Restricts stores returned to those matching a filter. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in `yyyy-mm-dd` form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it\'s just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. Only filtering on labels is supported, for example `labels.key=value`.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit on the number of FHIR stores to return in a single response. If not specified, 100 is used. May not be larger than 1000.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The next_page_token value returned from the previous List request, if any.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Name of the dataset.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListFhirStoresResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentFhirStoresRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/fhirStores',
  tags: ['projects'],
  description: 'Creates a new FHIR store within the parent dataset.',
  operationId: 'healthcare.projects.locations.datasets.fhirStores.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      fhirStoreId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The ID of the FHIR store that is being created. The string must match the following regex: `[\\p{L}\\p{N}_\\-\\.]{1,256}`.',
            in: 'query',
            name: 'fhirStoreId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'The name of the dataset this FHIR store belongs to.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FhirStoreSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FhirStoreSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentHl7V2StoresRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/hl7V2Stores',
  tags: ['projects'],
  description: 'Lists the HL7v2 stores in the given dataset.',
  operationId: 'healthcare.projects.locations.datasets.hl7V2Stores.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Restricts stores returned to those matching a filter. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in `yyyy-mm-dd` form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it\'s just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. Only filtering on labels is supported. For example, `labels.key=value`.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit on the number of HL7v2 stores to return in a single response. If not specified, 100 is used. May not be larger than 1000.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The next_page_token value returned from the previous List request, if any.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Name of the dataset.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListHl7V2StoresResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentHl7V2StoresRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/hl7V2Stores',
  tags: ['projects'],
  description: 'Creates a new HL7v2 store within the parent dataset.',
  operationId: 'healthcare.projects.locations.datasets.hl7V2Stores.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      hl7V2StoreId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The ID of the HL7v2 store that is being created. The string must match the following regex: `[\\p{L}\\p{N}_\\-\\.]{1,256}`.',
            in: 'query',
            name: 'hl7V2StoreId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'The name of the dataset this HL7v2 store belongs to.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: Hl7V2StoreSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: Hl7V2StoreSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentMessagesRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/messages',
  tags: ['projects'],
  description:
    'Lists all the messages in the given HL7v2 store with support for filtering. Note: HL7v2 messages are indexed asynchronously, so there might be a slight delay between the time a message is created and when it can be found through a filter.',
  operationId: 'healthcare.projects.locations.datasets.hl7V2Stores.messages.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Restricts messages returned to those matching a filter. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in `yyyy-mm-dd` form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it\'s just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. Fields/functions available for filtering are: * `message_type`, from the MSH-9.1 field. For example, `NOT message_type = "ADT"`. * `send_date` or `sendDate`, the YYYY-MM-DD date the message was sent in the dataset\'s time_zone, from the MSH-7 segment. For example, `send_date < "2017-01-02"`. * `send_time`, the timestamp when the message was sent, using the RFC3339 time format for comparisons, from the MSH-7 segment. For example, `send_time < "2017-01-02T00:00:00-05:00"`. * `create_time`, the timestamp when the message was created in the HL7v2 store. Use the RFC3339 time format for comparisons. For example, `create_time < "2017-01-02T00:00:00-05:00"`. * `send_facility`, the care center that the message came from, from the MSH-4 segment. For example, `send_facility = "ABC"`. * `PatientId(value, type)`, which matches if the message lists a patient having an ID of the given value and type in the PID-2, PID-3, or PID-4 segments. For example, `PatientId("123456", "MRN")`. * `labels.x`, a string value of the label with key `x` as set using the Message.labels map. For example, `labels."priority"="high"`. The operator `:*` can be used to assert the existence of a label. For example, `labels."priority":*`.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Orders messages returned by the specified order_by clause. Syntax: https://cloud.google.com/apis/design/design_patterns#sorting_order Fields available for ordering are: * `send_time`',
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit on the number of messages to return in a single response. If not specified, 100 is used. May not be larger than 1000.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The next_page_token value returned from the previous List request, if any.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      view: z
        .enum([
          'MESSAGE_VIEW_UNSPECIFIED',
          'RAW_ONLY',
          'PARSED_ONLY',
          'FULL',
          'SCHEMATIZED_ONLY',
          'BASIC',
        ])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the parts of the Message to return in the response. When unspecified, equivalent to BASIC. Setting this to anything other than BASIC with a `page_size` larger than the default can generate a large response, which impacts the performance of this method.',
            in: 'query',
            name: 'view',
            schema: {
              enum: [
                'MESSAGE_VIEW_UNSPECIFIED',
                'RAW_ONLY',
                'PARSED_ONLY',
                'FULL',
                'SCHEMATIZED_ONLY',
                'BASIC',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Name of the HL7v2 store to retrieve messages from.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListMessagesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentMessagesRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/messages',
  tags: ['projects'],
  description:
    'Parses and stores an HL7v2 message. This method triggers an asynchronous notification to any Pub/Sub topic configured in Hl7V2Store.Hl7V2NotificationConfig, if the filtering matches the message. If an MLLP adapter is configured to listen to a Pub/Sub topic, the adapter transmits the message when a notification is received.',
  operationId: 'healthcare.projects.locations.datasets.hl7V2Stores.messages.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'The name of the HL7v2 store this message belongs to.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateMessageRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MessageSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentMessagesBatchGetRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/messages:batchGet',
  tags: ['projects'],
  description: 'Gets multiple messages in the given HL7v2 store.',
  operationId: 'healthcare.projects.locations.datasets.hl7V2Stores.messages.batchGet',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "The resource id of the HL7v2 messages to retrieve in the format: `{message_id}`, where the full resource name is `{parent}/messages/{message_id}` A maximum of 100 messages can be retrieved in a batch. All 'ids' have to be under parent.",
            explode: true,
            in: 'query',
            name: 'ids',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      view: z
        .enum([
          'MESSAGE_VIEW_UNSPECIFIED',
          'RAW_ONLY',
          'PARSED_ONLY',
          'FULL',
          'SCHEMATIZED_ONLY',
          'BASIC',
        ])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the parts of the Messages resource to return in the response. When unspecified, equivalent to BASIC.',
            in: 'query',
            name: 'view',
            schema: {
              enum: [
                'MESSAGE_VIEW_UNSPECIFIED',
                'RAW_ONLY',
                'PARSED_ONLY',
                'FULL',
                'SCHEMATIZED_ONLY',
                'BASIC',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Name of the HL7v2 store to retrieve messages from, in the format: `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/hl7v2Stores/{hl7v2_store_id}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BatchGetMessagesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentMessagesIngestRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/messages:ingest',
  tags: ['projects'],
  description:
    'Parses and stores an HL7v2 message. This method triggers an asynchronous notification to any Pub/Sub topic configured in Hl7V2Store.Hl7V2NotificationConfig, if the filtering matches the message. If an MLLP adapter is configured to listen to a Pub/Sub topic, the adapter transmits the message when a notification is received. If the method is successful, it generates a response containing an HL7v2 acknowledgment (`ACK`) message. If the method encounters an error, it returns a negative acknowledgment (`NACK`) message. This behavior is suitable for replying to HL7v2 interface systems that expect these acknowledgments.',
  operationId: 'healthcare.projects.locations.datasets.hl7V2Stores.messages.ingest',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'The name of the HL7v2 store this message belongs to.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: IngestMessageRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: IngestMessageResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentUserDataMappingsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/userDataMappings',
  tags: ['projects'],
  description: 'Lists the User data mappings in the specified consent store.',
  operationId: 'healthcare.projects.locations.datasets.consentStores.userDataMappings.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Restricts the user data mappings returned to those matching a filter. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in `yyyy-mm-dd` form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it\'s just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. The fields available for filtering are: - data_id - user_id. For example, `filter=user_id=\\"user123\\"`. - archived - archive_time',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Limit on the number of User data mappings to return in a single response. If not specified, 100 is used. May not be larger than 1000.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Token to retrieve the next page of results, or empty to get the first page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. Name of the consent store to retrieve User data mappings from.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListUserDataMappingsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentUserDataMappingsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/userDataMappings',
  tags: ['projects'],
  description: 'Creates a new User data mapping in the parent consent store.',
  operationId: 'healthcare.projects.locations.datasets.consentStores.userDataMappings.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. Name of the consent store.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserDataMappingSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UserDataMappingSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ResourceGetIamPolicyRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{resource}:getIamPolicy',
  tags: ['projects'],
  description:
    'Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.',
  operationId: 'healthcare.projects.locations.datasets.hl7V2Stores.getIamPolicy',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      'options.requestedPolicyVersion': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).',
            in: 'query',
            name: 'options.requestedPolicyVersion',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
    params: z.object({
      resource: z
        .string()
        .openapi({
          param: {
            description:
              'REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.',
            in: 'path',
            name: 'resource',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PolicySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ResourceSetIamPolicyRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{resource}:setIamPolicy',
  tags: ['projects'],
  description:
    'Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.',
  operationId: 'healthcare.projects.locations.datasets.hl7V2Stores.setIamPolicy',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      resource: z
        .string()
        .openapi({
          param: {
            description:
              'REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.',
            in: 'path',
            name: 'resource',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SetIamPolicyRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PolicySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ResourceTestIamPermissionsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{resource}:testIamPermissions',
  tags: ['projects'],
  description:
    'Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.',
  operationId: 'healthcare.projects.locations.datasets.hl7V2Stores.testIamPermissions',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      resource: z
        .string()
        .openapi({
          param: {
            description:
              'REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.',
            in: 'path',
            name: 'resource',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TestIamPermissionsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TestIamPermissionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1SourceDatasetDeidentifyRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{sourceDataset}:deidentify',
  tags: ['projects'],
  description:
    'Creates a new dataset containing de-identified data from the source dataset. The metadata field type is OperationMetadata. If the request is successful, the response field type is DeidentifySummary. The LRO result may still be successful if de-identification fails for some resources. The new de-identified dataset will not contain these failed resources. The number of resources processed are tracked in Operation.metadata. Error details are logged to Cloud Logging. For more information, see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging).',
  operationId: 'healthcare.projects.locations.datasets.deidentify',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      sourceDataset: z
        .string()
        .openapi({
          param: {
            description:
              'Source dataset resource name. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`.',
            in: 'path',
            name: 'sourceDataset',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeidentifyDatasetRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1SourceStoreDeidentifyRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{sourceStore}:deidentify',
  tags: ['projects'],
  description:
    'De-identifies data from the source store and writes it to the destination store. The metadata field type is OperationMetadata. If the request is successful, the response field type is DeidentifyFhirStoreSummary. The number of resources processed are tracked in Operation.metadata. Error details are logged to Cloud Logging. For more information, see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging).',
  operationId: 'healthcare.projects.locations.datasets.fhirStores.deidentify',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      sourceStore: z
        .string()
        .openapi({
          param: {
            description:
              'Source FHIR store resource name. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.',
            in: 'path',
            name: 'sourceStore',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeidentifyFhirStoreRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
