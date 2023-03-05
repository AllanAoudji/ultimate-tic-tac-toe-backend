import { server } from "@src/app";
import { PORT } from "@src/config";

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listen on port ${PORT}.`);

  // eslint-disable-next-line no-console
  console.log(`http://localhost:${PORT}`);
});
