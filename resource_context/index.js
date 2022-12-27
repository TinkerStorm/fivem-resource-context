function getResourceContext(resourceName, metadataKey, index = 0) {
  const value = GetResourceMetadata(resourceName, metadataKey, index);
  /** @type {Record<string, Primitive>?} */
  const extra = GetResourceMetadata(`${resourceName}_extra`, metadataKey, index);

  return {
    resource: resourceName,
    key: metadataKey,
    value,
    extra
  };
}

function* getResourceIterator(resourceName, metadataKey) {
  const count = GetNumResourceMetadata(resourceName, metadataKey);

  for (let index = 0; index < count; index++) {
    yield getResourceContext(resourceName, metadataKey, index);
  }

  return null;
}

exports('getResourceContext', getResourceContext);
exports('getResourceIterator', getResourceIterator);