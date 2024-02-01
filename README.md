
# Command Line Note Application

## Installation

1. Ensure you have Node.js installed. If not, download and install it from [Node.js website](https://nodejs.org/).
2. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```
3. Navigate to the project directory:
   ```bash
   cd your-repo
   ```
4. Install dependencies:
   ```bash
   npm install
   ```

## List

- **Command:** `list`
- **Description:** List all notes
- **Example:**
  ```bash
  node app.js list
  ```

## Get

- **Command:** `get`
- **Description:** Get a note
- **Arguments:**
  - `title`: Enter the title of the note to fetch (string, required)
- **Example:**
  ```bash
  node app.js get --title="Your Note Title"
  ```

## Add

- **Command:** `add`
- **Description:** Add a new note
- **Arguments:**
  - `title`: Note title (string, required)
  - `body`: Note body (string, required)
- **Example:**
  ```bash
  node app.js add --title="New Note Title" --body="Note Content"
  ```

## Modify

- **Command:** `modify`
- **Description:** Modify an existing note
- **Arguments:**
  - `title`: Provide the title of the note to modify (string, required)
  - `modification`: Enter the modification you want to make (string, required)
- **Example:**
  ```bash
  node app.js modify --title="Existing Note Title" --modification="Modified Content"
  ```

## Delete

- **Command:** `remove`
- **Description:** Remove a note
- **Arguments:**
  - `title`: Enter the title of the note to remove (string, required)
- **Example:**
  ```bash
  node app.js remove --title="Note to Remove"
  ```
