
let bulkWriter = firestore.bulkWriter();
let commentRef = firestore.doc('col/doc/comments/comment1');
bulkWriter.delete(commentRef);
await bulkWriter.commit();

