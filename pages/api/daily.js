
import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {

    let doc = await req.db.collection('admin_users').findOne()
   try{
       console.log(doc);
       res.json(doc);
   }
     catch (e) {
         res.status(500).json({ error: e.message || "Something went wrong" });
    }
});

export default handler;

