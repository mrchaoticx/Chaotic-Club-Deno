function app(){
  return `
    <div class="header">
      <h1>Deno Project</h1>
    </div>
  `;
}

Deno.serve({ port: 8000 }, async (_req) => {
  return new Response(
      [
        app()
      ].join(''),
      {
          status: 200,
          headers: { "content-type": "text/html" },
      }
  );
});
