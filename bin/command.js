#!/usr/bin/env node

const { generateMetaXml, deleteOldMeta } = require('../lib');

// Deletar meta.xml antigo (se existir)
deleteOldMeta();

// Gerar o novo meta.xml
generateMetaXml();
